from rest_framework import serializers
from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.authtoken.models import Token


class UserCreateSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'email',
                  'password']
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user = User(username=username, email=email)
        user.set_password(password)
        user.save()
        return user


class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    token = serializers.CharField(allow_blank=True, read_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'token']
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def validate(self, data):
        user_obj = None
        name = data.get('username')
        password = data["password"]
        user = User.objects.filter(
            Q(username=name)
        ).distinct()
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise serializers.ValidationError("Invalid user.")
        if user_obj:
            if not user_obj.check_password(password):
                raise serializers.ValidationError("Incorrect password.")
        token, created = Token.objects.get_or_create(user=user_obj)
        data["token"] = token.key
        return data

from api_app.serializers import (
    UserCreateSerializer, UserLoginSerializer
)
from rest_framework import generics, permissions
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import UploadFile
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from rest_framework.parsers import FormParser, MultiPartParser

import os
import time

class UserCreate(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('pk')
    serializer_class = UserCreateSerializer


class UserLogin(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class FileUploadView(APIView):
    """The Upload File view should be availale to users only."""
    parser_classes = (MultiPartParser, FormParser)
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def post(self, request, filename="file.jpg", format=None):
        file = request.data.get('file', None)
        print(request.data)
        print("Thisis the data u pl askeed for")
        if file:
            print("ABFEOrE")
			#print("HHHA")	
            user = request.user
			#print("HEEREER")
            uname = str(user.username)
            tType = request.params.testType
            if uname not in os.listdir("api_app/media/"):
                os.mkdir("api_app/media/" + uname)
            
            extention = filename.split(".")[1]

            os.mkdir("api_app/media/" + uname + "/" + str(tType) + str(time.strftime("%Y%m%d-%H%M%S")) + "/")
            path = default_storage.save(
                "api_app/media/" + uname + "/" + str(tType) + str(time.strftime("%Y%m%d-%H%M%S")) + "/test." + extention, ContentFile(file.read()))
            
            uploadFile = UploadFile(path=path, user=user)
            uploadFile.save()
            return Response({
                "path": path,
                "user": user.username
            },
                status=HTTP_200_OK)
        return Response({"error": "file not found"}, status=HTTP_400_BAD_REQUEST)

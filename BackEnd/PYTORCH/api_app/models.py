from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.core.files.storage import default_storage

# Create your models here.


class UploadFile(models.Model):
    path = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(
        User, related_name='uploaded_files', on_delete=models.CASCADE)

    # only works for single object delete, not queryset delete, very imp
    def delete(self):
        try:
            default_storage.delete(self.path)
        except:
            pass
        super(UploadFile, self).delete()

    def __str__(self):
        return str(self.path)

from django.urls import path, re_path
from api_app import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('api/users/', views.UserCreate.as_view(), name="user_list"),
    path('api/users/login/', views.UserLogin.as_view(), name="user_login"),
    re_path(r'^api/files/upload/(?P<filename>[^/]+)$',
            views.FileUploadView.as_view(), name="file_view"),
]
urlpatterns = format_suffix_patterns(urlpatterns)

"""
URL configuration for LMS project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api import urls as api_urls
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),

    # for login and logout using django rest framework
    path('api-auth/', include('rest_framework.urls')),
    # for api urls routing 
    path('api/', include(api_urls)),


]


# for view redirection

urlpatterns += [
    path('', RedirectView.as_view(url='api/', permanent=True)),
]

<<<<<<< HEAD
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f

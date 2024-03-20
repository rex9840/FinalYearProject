
from django.urls import path, include
<<<<<<< HEAD
from LMS.settings import BASE_DIR
from . import views
from rest_framework import routers
=======

from LMS.settings import BASE_DIR
from . import views
from rest_framework import routers

>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('details', views.UserView,'details')
router.register('create', views.UsersCreate,'create')
<<<<<<< HEAD
router.register('rating', views.UserRatingViewSet,'rating')
=======

>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(),name='token_refresh'),
    path('users/', include(router.urls)),
<<<<<<< HEAD

=======
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
]



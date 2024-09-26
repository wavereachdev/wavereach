from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EchoViewSet, PrivateEchoViewSet

router = DefaultRouter()
router.register(r'echos', EchoViewSet)
router.register(r'private-echos', PrivateEchoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


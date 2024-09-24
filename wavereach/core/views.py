from django.shortcuts import render
from rest_framework import viewsets
from .models import Echo, PrivateEcho
from .serializers import EchoSerializer, PrivateEchoSerializer
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator

@method_decorator(cache_page(60 * 15), name='dispatch')
class EchoViewSet(viewsets.ModelViewSet):
    queryset = Echo.objects.all()
    serializer_class = EchoSerializer

@method_decorator(cache_page(60 * 15), name='dispatch')
class PrivateEchoViewSet(viewsets.ModelViewSet):
    queryset = PrivateEcho.objects.all()
    serializer_class = PrivateEchoSerializer


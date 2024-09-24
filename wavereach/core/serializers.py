from rest_framework import serializers
from .models import Echo, PrivateEcho

class EchoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Echo
        fields = '__all__'

class PrivateEchoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivateEcho
        fields = '__all__'


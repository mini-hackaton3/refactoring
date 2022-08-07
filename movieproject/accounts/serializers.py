from unittest.util import _MAX_LENGTH
from rest_framework import serializers
from .models import CustomUser

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=128)

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'nickname', 'age', 'image']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'username', 
            'last_login',
            'is_staff', 
            'is_active', 
            'date_joined', 
            'nickname',
            'age',
            'image',
            ]
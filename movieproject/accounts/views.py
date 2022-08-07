from cProfile import Profile
from distutils.log import Log
from msilib.schema import ServiceInstall
from telnetlib import STATUS
from django.shortcuts import render
from django.contrib import auth
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CustomUser
from .serializers import LoginSerializer, SignupSerializer, ProfileSerializer

# Create your views here.

'''
로그인
'''
@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = auth.authenticate(
            request = request, 
            username = serializer.data['username'],
            password = serializer.data['password']
        )
        if user is not None:
            auth.login(request, user)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(status=status.HTTP_400_BAD_REQUEST)

'''
로그아웃
'''
@api_view(['POST'])
def logout(request):
    auth.logout(request)
    return Response(status=status.HTTP_200_OK)

'''
회원가입
'''
@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        new_user = serializer.save(password = make_password(serializer.validated_data['password']))
        auth.login(request, new_user)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

'''
유저목록 확인
'''
@api_view(['GET'])
def get_all_users(request):
    users = CustomUser.objects.all()
    serializer = SignupSerializer(users, many=True)
    return Response(serializer.data)

'''
개인 프로필 확인
이름, 최근 로그인, 스태프 여부, 활동 여부, 가입일, 닉네임, 나이, 사진
'''
@api_view(['GET'])
def get_profile(request):
    if request.user.is_authenticated:
        user = CustomUser.objects.get(id=request.user.id)
        serializer = ProfileSerializer(user)
        return Response(serializer.data)

'''
사용자 정보 수정
로그인되어 있을 때 사용자 정보 수정이 가능하도록 함.
'''
@api_view(['GET', 'POST'])
def edit_profile(request):
    if request.user.is_authenticated:
        user = CustomUser.objects.get(id=request.user.id)
        serializer = SignupSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save(password = make_password(serializer.validated_data['password']))
            auth.login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        serializer = SignupSerializer(user)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_404_NOT_FOUND)

'''
사용자 정보 삭제
'''
@api_view(['DELETE'])
def delete_user(request):
    if request.user.is_authenticated:
        user = CustomUser.objects.get(id=request.user.id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_404_NOT_FOUND)
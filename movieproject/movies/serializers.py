from rest_framework import serializers
from .models import Movie, Staff

class MovieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movie
    fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

class MoviePostSerializer(serializers.ModelSerializer):
  model = Movie
  fields = ['title']


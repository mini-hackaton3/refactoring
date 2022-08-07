from django.db import models

# Create your models here.

class Movie(models.Model):
  title_kor = models.CharField(max_length = 200)
  title_eng = models.CharField(max_length = 200, unique=True)
  poster_url = models.TextField(default = 'default')
  rating_aud = models.CharField(max_length=10, null=True)
  rating_cri = models.CharField(max_length=10, null=True)
  rating_net = models.CharField(max_length=10, null=True)
  genre = models.CharField(max_length = 200, default='default')
  showtimes = models.CharField(max_length = 200)
  release_date = models.CharField(max_length = 200)
  rate = models.CharField(max_length = 200, default='default')
  summary = models.TextField(default = 'default')

  def __str__(self):
    return self.title_kor
  
class Staff(models.Model):
  movie = models.ForeignKey(Movie, null=True, blank=True,  on_delete=models.CASCADE)
  name = models.CharField(max_length=100)
  role = models.CharField(max_length=100)
  image_url = models.TextField(default='default')

  def __str__(self):
    return self.name

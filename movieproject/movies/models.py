from django.db import models
from accounts.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator

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

class Comment(models.Model):
    movie = models.ForeignKey(Movie, blank=True, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, blank=True, null=True, on_delete=models.CASCADE)
    post = models.CharField(max_length=500)
    pub_date = models.DateTimeField(auto_now_add=True)
    rating = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(5)], blank=True, null=True)
    
    class Meta:
        ordering = ['-pub_date']

    def __str__(self):
        return self.post
    
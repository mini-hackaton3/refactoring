from django.urls import path
from .views import *

app_name = 'movies'

urlpatterns = [
    path('', get_all_movies),
    path('init_db', init_db),
    path('<int:id>/', get_one_movie),
    path('search', search), # search?query=[단어]
]
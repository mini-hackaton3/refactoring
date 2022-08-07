from django.urls import path
from .views import *

app_name = 'movies'

urlpatterns = [
    path('', get_all_movies),
    path('init_db', init_db),
    path('<int:id>/', get_one_movie),
    path('search', search), # search?query=[단어]

    path('my_comments', view_my_comments),
    path('view_all_comments/', view_all_comments),
    path('<int:id>/view', view_comments),
    path('<int:id>/comment', new_comment),
    path('edit_comment/<int:id>', re_comment),
    path('delete_comment/<int:id>', delete_comment)
]
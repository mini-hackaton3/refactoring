from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('', login),
    path('logout/', logout),
    path('signup/', signup),
    path('users/', get_all_users),
    path('edit/', edit_profile),
    path('delete/', delete_user),
    path('profile/', get_profile),
]
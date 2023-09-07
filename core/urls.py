from django.urls import path

from . import views                  #importing all views belonging to this app

app_name = 'core'

urlpatterns =[
    path ('', views.index, name = 'index'),
    path('contact/' , views.contact, name='contact') ,
    path('signup/', views.signup,name='signup'),
]
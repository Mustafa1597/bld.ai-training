from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  shipping_address = models.CharField(max_length=50)




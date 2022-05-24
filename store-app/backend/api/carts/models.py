from django.db import models

from users.models import User
from products.models import Product

class Item(models.Model):
  owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="items")
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  quantity = models.IntegerField()
  in_cart = models.BooleanField(default=True)
  
  @property
  def total_price(self):
    return self.product.price * self.quantity


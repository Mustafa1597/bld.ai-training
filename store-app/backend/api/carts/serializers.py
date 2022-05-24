from rest_framework import serializers

from .models import Item
from products.serializers import ProductSerializer

class ItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Item
    fields = ['id', 'product', 'quantity', 'total_price']
    read_only_fields = ['total_price']
    depth = 1
  
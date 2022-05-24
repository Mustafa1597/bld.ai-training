from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions

from products.models import Product
from .models import Item
from .serializers import ItemSerializer

class CartView(generics.ListCreateAPIView):
  serializer_class = ItemSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Item.objects.filter(owner=user, in_cart=True)

  def perform_create(self, serializer):
    product_id = serializer.initial_data['product']['id']
    product = Product.objects.get(id=product_id)
    serializer.save(owner=self.request.user, product=product)

class CartUpdateView(generics.RetrieveUpdateDestroyAPIView):
  serializer_class = ItemSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Item.objects.filter(owner=user, in_cart=True)
  
  def perform_update(self, serializer):
    serializer.save(owner=self.request.user)

class ProductItemsView(generics.RetrieveAPIView):
  serializer_class = ItemSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Item.objects.filter(owner=user)

  def get_object(self):
    queryset = self.get_queryset()
    product_id = self.kwargs['product_id']
    return get_object_or_404(queryset, product__id=product_id)
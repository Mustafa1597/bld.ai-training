from rest_framework import generics
from rest_framework import permissions

from .models import Product
from .serializers import ProductSerializer

class ProductListView(generics.ListAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  permission_classes = [permissions.AllowAny]

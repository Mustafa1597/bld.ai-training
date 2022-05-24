from django.urls import path

from .views import CartView, CartUpdateView, ProductItemsView

urlpatterns = [
  path('cart', CartView.as_view(), name='cart'),
  path('cart/<int:pk>', CartUpdateView.as_view(), name='update-cart'),
  path('<int:product_id>', ProductItemsView.as_view(), name="product-items"),
]
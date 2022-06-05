from django.urls import path

from . import views

urlpatterns = [
  path('', views.ListCreateQuoteView.as_view(), name="quotes"),
  path('<int:pk>', views.RetrieveQuoteView.as_view(), name="quote"),
  path('<int:quote_id>/comments', views.ListCreateCommentsView.as_view(), name="comments"),
]
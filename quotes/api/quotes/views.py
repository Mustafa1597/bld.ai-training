from rest_framework.generics import ListCreateAPIView, RetrieveAPIView

from .models import Quote, Comment
from .serializers import QuoteSerializer, CommentSerializer

class ListCreateQuoteView(ListCreateAPIView):
  queryset = Quote.objects.all()
  serializer_class = QuoteSerializer

class RetrieveQuoteView(RetrieveAPIView):
  queryset = Quote.objects.all()
  serializer_class = QuoteSerializer

class ListCreateCommentsView(ListCreateAPIView):
  serializer_class = CommentSerializer
  def get_queryset(self):
      return Comment.objects.filter(quote=self.kwargs["quote_id"])
  
  def perform_create(self, serializer):
      return serializer.save(quote=Quote.objects.get(pk=self.kwargs["quote_id"]))

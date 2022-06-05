from rest_framework import serializers 

from .models import Quote, Comment

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__'
    read_only_fields = ['quote']

class QuoteSerializer(serializers.ModelSerializer):
  comments = CommentSerializer(many=True, read_only=True)
  class Meta:
    model = Quote
    fields = ['id', 'content', 'author', 'comments']
    depth = 1


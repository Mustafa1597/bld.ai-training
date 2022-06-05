from django.db import models


class Quote(models.Model):
  content = models.TextField()
  author = models.CharField(max_length=50)


class Comment(models.Model): 
  comment = models.TextField(max_length=1000)
  quote = models.ForeignKey(Quote, on_delete=models.CASCADE, related_name="comments")
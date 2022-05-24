from rest_framework import serializers

from .models import User

class SignUpSerializer(serializers.ModelSerializer):
  confirm_password = serializers.CharField(read_only=True)

  class Meta:
    model = User
    fields = [
      "username",
      "email",
      "password",
      "confirm_password",
      "shipping_address"
    ]

  def validate(self, data):
    if self.initial_data["password"] != self.initial_data["confirm_password"]:
      raise serializers.ValidationError("password not equal to confirm password")
    return data
  
  def create(self, validated_data):
    return User.objects.create_user(**validated_data)
  
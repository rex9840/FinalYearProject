from rest_framework import serializers
from datetime import datetime
from django.contrib.auth.hashers import make_password
from api.users.models import Users

class UserSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
    password = serializers.CharField(write_only=True)
    class Meta:
        model  = Users
        exclude = ['is_staff','is_admin','is_active'] 
    def update(self, instance, validated_data):
        return super().update(instance, validated_data) 




=======
    class Meta:
        model  = Users
        exclude = ['id','is_staff','is_admin','is_teacher','is_active']
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f


class RegisterSerializer(serializers.ModelSerializer):

<<<<<<< HEAD
=======
    is_teacher = serializers.BooleanField(default=False)
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = Users
        exclude = ['id','is_admin','is_staff','is_active']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords must match.")
        del data['confirm_password']
        return data




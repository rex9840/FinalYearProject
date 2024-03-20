from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import os

<<<<<<< HEAD

class UserManager(BaseUserManager):

    def create_user(self,email,first_name,last_name,age,address,phone_number,password=None,is_teacher=False):
=======
from django.db.models.fields import is_iterable

class UserManager(BaseUserManager):

    def create_user(self,email,first_name,last_name,age,address,phone_number,school_id,password=None,is_teacher=False):
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
        if  not email: 
            raise ValueError("User must have an email address")
        if not phone_number:
            raise ValueError("User must have a phone number")
<<<<<<< HEAD
=======
        if not school_id:
            raise ValueError("User must have a school id")
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f

        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name, 
            last_name = last_name, 
            age = age, 
            address = address, 
            phone_number = phone_number, 
<<<<<<< HEAD
=======
            school_id = school_id,
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
            is_active = True,
        )
        user.password = password
        user.save(using=self._db)
        return user


<<<<<<< HEAD
    def create_superuser(self,email,first_name,last_name,age,address,phone_number,password):
        user = self.create_user(
            email = email,
=======
    def create_superuser(self,email,first_name,last_name,age,address,phone_number,school_id,password):
        user = self.create_user(
            school_id = school_id,
            email = self.normalize_email(email),
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
            first_name = first_name, 
            last_name = last_name, 
            age = age, 
            address = address, 
            phone_number = phone_number,
        )
        user.password = password
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user



class Users(AbstractBaseUser):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs) 
        self.id_instance = 0

    def get_profile_pic_filename(self,filename): 
<<<<<<< HEAD
        folder_path = "upload/profile_pic/"+str(self.id)
        return os.path.join(folder_path,filename)
    
    id= models.IntegerField(primary_key=True)
    password = models.CharField(verbose_name="password",max_length=255)
    date_joined = models.DateTimeField(verbose_name="date joined",auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login",auto_now=True)
    email = models.EmailField(verbose_name="email",unique=True) 
=======
        folder_path = str(self.school_id)
        return os.path.join(folder_path,filename)
    
    id= models.IntegerField()
    password = models.CharField(verbose_name="password")
    date_joined = models.DateTimeField(verbose_name="date joined",auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login",auto_now=True)
    email = models.EmailField(verbose_name="email",unique=True)
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    address = models.CharField(max_length=100)
<<<<<<< HEAD
    phone_number = models.CharField(null=True,blank=True,max_length=15)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    profile_pic = models.ImageField(upload_to=get_profile_pic_filename,default='/upload/profile_pic/default/Default-Profile-Picture-Transparent-Image.png')
    


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','age','address','phone_number','password']
    PASSWORD_FIELD = 'password'


    def __str__(self):
    #   full_name =  f'{self.first_name}' +" " + f'{self.last_name}'
    #   if self.is_admin:
    #       return full_name + " (Admin)"
       return str(self.id) + " - " + self.email
=======
    phone_number = models.IntegerField()
    school_id = models.IntegerField(primary_key=True)
    is_teacher = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    profile_pic = models.ImageField(upload_to=get_profile_pic_filename,default='/default/Default-Profile-Picture-Transparent-Image.png')
    


    USERNAME_FIELD = 'school_id'
    REQUIRED_FIELDS = ['email','first_name','last_name','age','address','phone_number','password']
    PASSWORD_FIELD = 'password'
    
    


    def __str__(self):
       full_name =  f'{self.first_name}' +" " + f'{self.last_name}'
       if self.is_admin:
           return full_name + " (Admin)"
       if self.is_teacher:
           return full_name + " (Teacher)"
       return full_name + " (Student)"
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f

    objects = UserManager()

    class Meta:
        db_table = 'users'
        verbose_name = 'users'
        ordering = ['date_joined']

    def has_perm(self,perm,obj=None):
        return self.is_admin
    
    def has_module_perms(self,app_label):
        return True

    def id_count(self):
<<<<<<< HEAD
        if Users.objects.count() > 0:
            self.id_instance = Users.objects.latest('id').id
=======
        if Users.objects.last():
            self.id_instance = Users.objects.last().id
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
        self.id_instance += 1
        return self.id_instance

    def save(self,*args,**kwargs):
        if not self.id:
            self.id = self.id_count()
        self.set_password(self.password)
        if self.is_admin:
            self.is_staff = True 
        super().save(*args,**kwargs)   

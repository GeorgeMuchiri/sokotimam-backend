from django.db import models
from users.models import CustomUser
from django.dispatch import receiver
from django.db.models.signals import post_save

class Profile(models.Model):
    user  = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    firstname =  models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    phone = models.IntegerField(null=True)
    address =   models.CharField(max_length=100)


    class Meta:
        verbose_name_plural = "Profiles"

    def __str__(self):
        return f'{self.user.user_name} Profile'


@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


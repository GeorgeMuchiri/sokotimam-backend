from django.db import models
from products.models import Product
from accounts.models import Profile


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now=True)
    quantity = models.IntegerField(default=1)

    def __str(self):
        return self.product.name


class Cart(models.Model):
    owner = models.OneToOneField(Profile, on_delete=models.SET_NULL, null=True)
    items = models.ManyToManyField(OrderItem, blank=True)
    date_ordered = models.DateTimeField(auto_now=True)
    is_ordered = models.BooleanField(default=False)
    total = models.FloatField(default=0)

    def get_all_items(self):
        return self.id


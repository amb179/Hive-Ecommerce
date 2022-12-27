from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.

CATEGORY = (
    ('Hats', 'Hats'),
    ('Shirts', 'Shirts'),
    ('Bottoms', 'Bottoms'),
  )
FILTER = (
    ("Men's", "Men's"),
    ("Women's", "Women's"),
  )
INSTOCK =   (
  ('Available', 'Available'),
  ('Not Available', 'Not Available')
)

class Product(models.Model):

  class Meta(object):
    db_table = 'product'

  image = CloudinaryField(
    'Image', blank=False, null=False)
  title = models.CharField(
    'Title', max_length=200, blank=False, null=False, db_index=True)
  description = models.CharField(
    'Description', max_length=2000, default='Product Description')
  category = models.CharField(
    'Category', choices=CATEGORY, db_index=True,max_length=30)
  filter = models.CharField(
    'Filter', choices=FILTER, db_index=True, max_length=30)
  in_stock = models.CharField(
    'In Stock', choices=INSTOCK, default='Not Available', max_length=30)
  price = models.DecimalField(
    'Price', decimal_places=2, max_digits=9)
  create_at = models.DateTimeField(
    'Created Datetime', blank=True, auto_now_add=True)




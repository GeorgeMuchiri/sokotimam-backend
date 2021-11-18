import graphene
from graphene_django import DjangoObjectType
from .models import Product, Category, Subcategory

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'category', 'subcategory')

class CategoryType(DjangoObjectType):
    class  Meta:
        model = Category
        fields = ('id', 'name')

class SubcategoryType(DjangoObjectType):
    class Meta:
        model = Subcategory
        fields = ('id', 'name')

class Query(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    #all_categories  =graphene.List(CategoryType)

    def resolve_all_products(root, info):
        return Product.objects.all()
    


schema = graphene.Schema(query=Query)
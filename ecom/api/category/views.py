from rest_framework import viewsets

from .serializers import CategorySerializer
from .models import Category

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all().order_by('name') #all of our data came through this query  and is now serialize and is now in json format!!
    serializer_class=CategorySerializer
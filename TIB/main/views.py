from django.shortcuts import render
from django.contrib import messages
from django.views import View
from store.models import *

# Create your views here.

def index(request):

    products = Product.objects.filter(is_available=True).order_by('-id')

    context = {'products':products}
    return render(request, 'main/index.html', context)
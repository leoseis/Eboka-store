from django.shortcuts import render , get_object_or_404
from .models import item

def detail (request ,pk):
    item = get_object_or_404(item, pk=pk)

    return render(request, 'item/detail.html',{
        'item': item
    })
    
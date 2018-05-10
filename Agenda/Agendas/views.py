from django.shortcuts import render,get_object_or_404,redirect
from .models import *
# Create your views here.

def Criar_agenda(request):
    return render(request, 'criaragenda.html',context=None)

def Detalhes_evento(request,id_evento):
    evento = get_object_or_404(evento, pk = id_evento)
    # if evento.can

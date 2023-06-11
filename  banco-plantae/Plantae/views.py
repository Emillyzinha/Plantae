from django.shortcuts import render
from .models import *
from .serializes import *

from rest_framework import viewsets
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated

def dados_usuario(request):
    token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
    dados = AccessToken(token)
    usuario = dados['user_id']
    return usuario

class ClienteCRUD(viewsets.ModelViewSet):
    queryset= Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = (IsAuthenticated, )

    # para encontrar valor igual aos parâmetros escolhidos. Retornar que o e-mail existe
    # def get_queryset(self):
    #     queryset = Cliente.objects.all()
    #     cpfCliente = self.request.query_params.get('cpf')
    #     emailCliente = self.request.query_params.get('email')

    #     if cpfCliente is not None:
    #         queryset = queryset.filter(cpf=cpfCliente)
    #         return queryset
        
    #     if emailCliente is not None:
    #         queryset = queryset.filter(email=emailCliente)
    #         return queryset
        
    #     return super().get_queryset()

    def list(self, request, *args, **kwargs):

        return super().list(request, *args, **kwargs)
    
    def create(self, request, *args, **kwargs):

        return super().create(request, *args, **kwargs)

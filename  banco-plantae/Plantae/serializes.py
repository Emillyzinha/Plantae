from rest_framework import serializers
from .models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nomeCompleto', 'username', 'data_nascimento', 'cpf', 'numero_telefone', 'email', 'password']

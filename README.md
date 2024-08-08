# Documentação da API de Validação de Documentos

## Visão Geral

Esta API fornece endpoints para validação de documentos brasileiros, incluindo CPF, CNPJ e CNH. Cada endpoint aceita um número de documento no corpo da requisição e retorna um JSON indicando se o documento é válido ou não.

## Configuração

A API é construída utilizando o framework **Express** e o middleware **body-parser** para processamento de requisições JSON. O servidor escuta na porta **3000**.

## Endpoints

### 1. Validação de CPF

- **URL**: `/cpf`
- **Método**: `POST`
- **Descrição**: Valida um número de CPF fornecido no corpo da requisição.
- **Corpo da Requisição**:
  ```json
  {
    "cpf": "string"
  }

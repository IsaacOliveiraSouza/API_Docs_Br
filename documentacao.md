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

- `/cpf`: Número do CPF a ser validado. Pode conter caracteres não numéricos que serão removidos pelo código.

- **Resposta**:
 ```json
    {
        "valid": true
    }
```
ou
```json
    

    {
        "valid": false
    }    
```

- **"valid"**: Indica se o CPF é válido (true) ou não (false).

### Exemplo de requisição:
```http
    POST /cpf
    Content-Type: application/json

    {
    "cpf": "123.456.789-09"
    }
```
- **Exemplo de Resposta**:

```json
{
  "valid": true
}
```

### 1. Validação de CNPJ

- **URL**: `/cnpj`
- **Método**: `POST`
- **Descrição**: Valida um número de CPNJ fornecido no corpo da requisição.
- **Corpo da Requisição**:
  ```json
  {
    "cnpj": "string"
  }
- **Resposta**:
 ```json
    {
        "valid": true
    }
```
ou
```json
    

    {
        "valid": false
    }    
```
- **"valid"**: Indica se o CNPJ é válido (true) ou não (false).

### Exemplo de requisição:
```http
    POST /cnpj
    Content-Type: application/json

    {
    "cnpj": "12.345.678/0001-95"
    }
```
- **Exemplo de Resposta**:

```json
{
  "valid": true
}
```

### 1. Validação de CNH

- **URL**: `/cnh`
- **Método**: `POST`
- **Descrição**: Valida um número de CNH fornecido no corpo da requisição.
- **Corpo da Requisição**:
  ```json
  {
    "cnh": "string"
  }

- `/cnh`: Número da cnh a ser validado. Pode conter caracteres não numéricos que serão removidos pelo código.

- **Resposta**:
 ```json
    {
        "valid": true
    }
```
ou
```json
    {
        "valid": false
    }    
```

- **"valid"**: Indica se a CNH é válido (true) ou não (false).

### Exemplo de requisição:
```http
    POST /cnh
    Content-Type: application/json

    {
    "cnh": "12345678900"
    }
```
- **Exemplo de Resposta**:

```json
{
  "valid": true
}
```

### Instruções de Execução
Para executar a API:
1. Instale as dependências
```bash
npm install express body-parser
```
2. Execute o servidor:
```bash
node <nome_do_arquivo>.js
```
3. A API estará disponível em http://localhost:3000.
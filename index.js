const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Função para validar CPF
const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
};

// Função para validar CNPJ
const validateCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);

    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
};

// Função para validar CNH
const validateCNH = (cnh) => {
    var char1 = cnh.charAt(0);

    if (cnh.replace(/[^\d]/g, '').length !== 11 || char1.repeat(11) === cnh) {
      return false;
    }
   
    for (var i = 0, j = 9, v = 0; i < 9; ++i, --j) {
      v += +(cnh.charAt(i) * j);
    }
  
    var dsc = 0,
        vl1 = v % 11;
  
    if (vl1 >= 10) {
      vl1 = 0;
      dsc = 2;
    }
  
    for (i = 0, j = 1, v = 0; i < 9; ++i, ++j) {
      v += +(cnh.charAt(i) * j);
    }
  
    var x = v % 11;
    var vl2 = (x >= 10) ? 0 : x - dsc;
  
    return ('' + vl1 + vl2) === cnh.substr(-2);
  
   
};

// Rotas para validação de documentos
app.post('/cpf', (req, res) => {
    const { cpf } = req.body;
    const isValid = validateCPF(cpf);
    res.json({ valid: isValid });
});

app.post('/cnpj', (req, res) => {
    const { cnpj } = req.body;
    const isValid = validateCNPJ(cnpj);
    res.json({ valid: isValid });
});

app.post('/cnh', (req, res) => {
    const { cnh } = req.body;
    const isValid = validateCNH(cnh);
    res.json({ valid: isValid });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

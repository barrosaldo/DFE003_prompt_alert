//Dobro do valor
var numero = prompt("Digite um número:");
numero = parseInt(numero);
var dobro = numero * 2;
alert("O dobro de " + numero + " é " + dobro + ".");

//Valor do jantar
var valorConta = prompt("Digite o valor da conta:");
valorConta = parseFloat(valorConta);
var taxa = valorConta * 0.1;
var valorTotal = valorConta + taxa;
alert("O valor total do jantar é R$" + valorTotal.toFixed(2) + "\n*Taxa de serviço inclusa.");

//Divisão Pizzaria
var valorPizza = prompt("Digite o valor da conta:");
var clientes = prompt("Digite a quantidade de clientes:");
valorPizza = parseFloat(valorPizza);
clientes = parseInt(clientes);
var valorIndividual = valorPizza / clientes;
alert("Cada cliente deve pagar o valor de R$" + valorIndividual.toFixed(2));
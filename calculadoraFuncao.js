/* Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no 
campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

console.log("Desenvolvimento 08 - CalculadoraFuncao");
var readlineSync = require('readline-sync')
var numero_01 = parseFloat(readlineSync.question("Digite o Primeiro numero: "));
let operacao = readlineSync.question("Digite a Operacao: +,-,* ou /");
var numero_02 = parseFloat(readlineSync.question("Digite o Segundo numero: "));

function mostra(){
	console.log("A soma eh: " + soma);
}

function subtraeMostra(n1,n2){
	var subtracao = n1-n2;
	console.log("A subtracao eh: " + subtracao);
} 

if (operacao == "+") {
		var soma = numero_01+numero_02;
			mostra();
		} else if (operacao == "-") {
			subtraeMostra(numero_01,numero_02);
		} else if (operacao == "*") {
		var multiplicacao = numero_01*numero_02;
			console.log("A multiplicacao eh: " + multiplicacao)
}else  
if (operacao == "/") {
	const calc = (num1, num2) => num1/num2;
	var res = calc(numero_01,numero_02);
	console.log("A divisao eh: "+res);
}else {
	console.log("Operacao Invalida.");
}
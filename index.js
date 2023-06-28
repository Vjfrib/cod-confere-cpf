//cálculo de validação do cpf
import { check } from './function.js'
//laço de validação dos numeros
do
  var cpf = prompt("Digite seu CPF");
  //len(cpf) função que retorna. cpf.len métododo para variaveis & ( = ) -> recebe. ( == ) -> igual
  while ( cpf.lenght !== 11 && isNaN(cpf))

/*fazer um array receber a var parapodermos iterar e trabalhar*/

//divide a string e transforma em números 
var numeros = cpf.split("").map(Number);


check(9, numeros)
check(10, numeros)

var original = cpf.split("").map(Number);

//faz o casting, sempre e a tal da igualdade igual (igualdade restrita)
if ((original.toString() === numeros.toString())){
  alert("Válido")
}else {
  alert("Inválido")
}
//cálculo de validação do cpf
do
  var cpf = prompt("Digite seu CPF");
  while ( len(cpf) != 11 && )

var cpfArray = cpf.split("").map(Number);
//divide a string e transfforma em números 

for (let i = 0; i < 9; i++) {
  cpfArray[i] *= (i+1);
}

alert(cpfArray.join(","));

var somatorio = 0;
for (let i = 0; i < 9; i++) {
  somatorio += cpfArray[i];
}

var digito = 0;
digito = somatorio % 11;

if (digito === 10) {
  digito = 0;
}

digito = parseInt(digito);
alert("primeiro digito: " + digito)

alert(cpfArray);
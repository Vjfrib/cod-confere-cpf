export check

function check (range, cpfArray) {
  //Atribui a multiplicação
for (let i = 0; i < range; i++) {
  cpfArray[i] *= (i+1);
}

//alert(cpfArray.join(",")); //debug em string
//alert(cpfArray); //debug em array (provavelmente)


var somatorio = 0;
for (let i = 0; i < range; i++) {
  somatorio += cpfArray[i];
}

var digito = 0;
digito = somatorio % 11;

if (digito === 10) {
  digito = 0;
}

//digito recebe ele como integer
digito = parseInt(digito);
alert("primeiro digito: " + digito)

//faz o envio
cpfArray[range] = digito
}

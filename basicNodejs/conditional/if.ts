const note = 85;

if (note >= 90) {
  console.log('A');
} else if (note >= 80) {
  console.log('B');
} else if (note >= 70) {
  console.log('C');
} else if (note >= 60) {
  console.log('D');
} else {
  console.log('F');
}

//Condicional usando if
const idadeIf = 18;

if (idadeIf >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}


// Condicional usando operador ternario
const idadeTernario = 18;
const mesagem = idadeTernario >= 18 ? 'Você é maior de idade.' : 'Você é menor de idade.';
console.log(mesagem); // Você é maior de idade.

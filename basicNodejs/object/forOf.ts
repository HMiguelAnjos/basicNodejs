// Itera sobre as entradas de um objeto
const objForOf = { nome: 'João', idade: 30 };
for (let [key, value] of Object.entries(objForOf)) {
  console.log(`${key}: ${value}`);
}
// nome: João
// idade: 30

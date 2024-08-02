// Retorna um array de pares [key, value] das propriedades enumeráveis de um objeto.
const objEntries = { nome: 'João', idade: 30 };
const entries = Object.entries(objEntries);
console.log(entries); // [['nome', 'João'], ['idade', 30]]

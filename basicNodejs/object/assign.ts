// Copia todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino
const destino = {};
const origem1 = { a: 1 };
const origem2 = { b: 2 };
Object.assign(destino, origem1, origem2);
console.log(destino); // { a: 1, b: 2 }

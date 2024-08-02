// Verifica se um objeto possui uma propriedade específica
const objHasOwn = { nome: 'João' };
const hasNome = Object.hasOwn(objHasOwn, 'nome');
console.log(hasNome); // true

// Verifica se uma propriedade está presente no objeto ou em seu protótipo
const objIn = { nome: 'João' };
console.log('nome' in objIn); // true
console.log('toString' in objIn); // true (herdado de Object.prototype)

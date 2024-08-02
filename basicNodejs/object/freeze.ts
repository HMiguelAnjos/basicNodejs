// Congela um objeto, impedindo novas adições, exclusões ou modificações de propriedades existentes
const objFreeze = { nome: 'João' };
Object.freeze(objFreeze);
objFreeze.nome = 'Maria'; // Não tem efeito
console.log(objFreeze.nome); // 'João'

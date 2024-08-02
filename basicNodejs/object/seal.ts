// Sela um objeto, impedindo novas adições ou exclusões de propriedades, mas permitindo modificações nas propriedades existentes
interface Seal {nome?: string}
const objSeal: Seal = { nome: 'João' };
Object.seal(objSeal);
objSeal.nome = 'Maria'; // Modificação permitida
delete objSeal.nome; // Não tem efeito
console.log(objSeal); // { nome: 'Maria' }

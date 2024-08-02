// Define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade existente
const objDefineProperty = {};
Object.defineProperty(objDefineProperty, 'nome', {
  value: 'João',
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(objDefineProperty); // { nome: 'João' }

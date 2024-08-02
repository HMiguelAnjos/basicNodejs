// Cria um novo objeto com o protótipo especificado
const proto = { saudar: function() { console.log("Olá!"); } };
const objCreate = Object.create(proto);
objCreate.saudar(); // Olá!

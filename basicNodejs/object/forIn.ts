// Itera sobre todas as propriedades enumeráveis de um objeto, incluindo as propriedades herdadas
const objForIn = { nome: 'João', idade: 30 };
for (let prop in objForIn) {
  console.log(`${prop}: ${objForIn[prop as keyof typeof objForIn]}`);
}
// nome: João
// idade: 30

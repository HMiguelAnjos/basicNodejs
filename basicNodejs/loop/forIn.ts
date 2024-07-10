const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key as keyof typeof obj]}`); // keyof(obtem um tipo que representa todas as chaves de um objeto como uma união de strings) typeof (optem o tipo da uma variavel) obj - retorna um tipo que é a união das chaves do objeto obj.
  }
}
// Saída: a: 1 b: 2 c: 3

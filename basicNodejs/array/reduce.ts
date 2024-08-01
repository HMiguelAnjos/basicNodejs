/* Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzir a um único valor
Exemplo - array.reduce(callback(accumulator, currentValue, currentIndex(optional), array(optional)), initialValue(optional))
*/
let arrReduce = [1, 2, 3, 4];
let sum = arrReduce.reduce((acc, x) => acc + x, 0);
console.log(sum); // 10

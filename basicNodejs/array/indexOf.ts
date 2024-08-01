/* indexOf
Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
lastIndexOf
Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
*/

let arrIndexOf = [1, 2, 3, 2, 1];
let index = arrIndexOf.indexOf(2);
console.log(index); // 1


let arrLastIndexOf = [1, 2, 3, 2, 1];
let lastIndex = arrLastIndexOf.lastIndexOf(2);
console.log(lastIndex); // 3

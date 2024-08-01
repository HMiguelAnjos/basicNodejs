/* Adiciona, remove ou substitui elementos em qualquer posição do array
Exemplo - array.splice(start, deleteCount, item1, item2, ..., itemN)
*/
let arrSplice = [1, 2, 3, 4];
arrSplice.splice(1, 2, 5, 6); // Remove 2 elementos a partir do índice 1 e adiciona 5 e 6
console.log(arrSplice); // [1, 5, 6, 4]

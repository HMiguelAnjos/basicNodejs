// Copia parte de um array para outra localização no mesmo array e retorna o array modificado
// array.copyWithin(target, start, end)
let arrCopyWithin = [1, 2, 3, 4];
arrCopyWithin.copyWithin(0, 2);
console.log(arrCopyWithin); // [3, 4, 3, 4]

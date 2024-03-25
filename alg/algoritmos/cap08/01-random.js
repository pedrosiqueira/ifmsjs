// Sorteia um float no intervalo [0,1)
let sorteado = Math.random();
console.log(sorteado);
 
// Transforma em um float entre [0,10)
sorteado = sorteado * 10;
console.log(sorteado);
 
// Descarta a parte decimal
let int_sorteado = Math.trunc(sorteado);
console.log(int_sorteado);

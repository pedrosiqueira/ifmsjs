/*
5. Dado um número, ele é múltiplo de 3 ou 5, mas não simultaneamente pelos dois?
*/

import scanf from "scanf"

console.log('Digite o 1 número:');
let x = scanf('%d')

console.log('O número é apenas multiplo de 3 ou de 5 ?:');

if (x%3==0 && x%5==0) {
    console.log ("Não!")
} else if (x%3==0 || (x%5==0)){
    console.log("Sim!")
}
else {
    console.log("Não!")
}

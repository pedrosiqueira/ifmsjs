/*
7. Dados três números, todos são múltiplos de 10?
*/

import scanf from "scanf"

console.log('Digite 3 números: ');
let x = scanf('%d')
let y = scanf('%d')
let z = scanf('%d')

console.log('dado esses 3 numeros todos sao multiplos de 10 ?: ');


if ((x % 10 == 0 && (y%10 == 0))&&(z%10==0)) {
    console.log("Sim!")
}
else {
    console.log("Não!")
}

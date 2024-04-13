/*
3. Dados dois números, algum deles é ímpar?
*/

import scanf from "scanf"

console.log('Insira o primeiro número:');
let n1 = scanf('%d')
console.log('Agora insira o segundo número:');
let n2 = scanf('%d')

let div1 = (n1 % 2)
let div2 = (n2 % 2)

if (div1 != 0 || div2 != 0) {
    console.log ("Sim, algum dos dois números é ímpar")
} else {
    console.log("Não, nenhum deles é ímpar")
}

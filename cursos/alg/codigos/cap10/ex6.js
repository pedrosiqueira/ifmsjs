// 6. Dada uma sequência de números seguida pelo número zero, qual a soma dos números?

import scanf from 'scanf';

let total = 0 
let contador = 0

console.log("digite os numeros:")
let numero = scanf("%f")

while (numero!= 0) {
    total+=numero
    numero = scanf ("%f")
}
console.log("a soma é:", total)

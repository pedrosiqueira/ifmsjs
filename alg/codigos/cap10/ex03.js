// Dado um natural n, qual a soma dos pares entre 1 e n?

import scanf from 'scanf';

console.log("Digite um numero natural")
let n = scanf("%f")

let contador = 0
let par = 0

while (contador != n + 1) {
    if (contador % 2 == 0) {
        par = par + contador
    }
    contador = contador + 1
}

console.log("A soma dos pares é:", par)
// Dado um natural, quais seus divisores? Por exemplo, os divisores de 90 são 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90.

import scanf from 'scanf';

console.log("digite um numero natural")
let i = scanf("%f")
for (let j = 1; j <= i; j++) {
    if (i % j == 0) console.log(j, "é divisor")
}

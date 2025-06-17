/* Dados dois números inteiros, qual é o resto e o quociente da divisão do primeiro pelo segundo? */

import scanf from 'scanf';
console.log("Informe 2 Numeros: ")
let a = scanf("%d")

let b = scanf("%d")

let c = Math.trunc(a/b)
let d = a % b
console.log("Quociente: ", c)
console.log("Resto: ", d)


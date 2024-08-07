// 3. Dado um natural n, qual a soma dos pares entre 1 e n?

import scanf from 'scanf';

let total = 0 

console.log("insira um número natural")
let num = scanf("%d")

let contador = num
while (contador >= 1) {
    if (contador % 2 == 0) {
        total += contador 
        console.log("+", contador)
    }
    contador --
}
console.log("___")
console.log (total)





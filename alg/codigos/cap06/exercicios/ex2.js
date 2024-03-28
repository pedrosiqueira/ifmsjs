// 2. Dados dois números, o primeiro é o dobro do segundo? Responda com SIM ou NÃO.

import scanf from "scanf";

console.log('insira o primeiro número :')
let num1 = scanf("%f")

console.log('Agora insira o segundo número :')
let num2 = scanf("%f")

let sub = (num1 - num2)

console.log ("Primeiro número", num1)
console.log ("Segundo número", num2)

console.log("O primeiro número é o dobro do segundo?")

if (sub == num2) {
    console.log('SIM')
} else {
    console.log('NÃO')
}

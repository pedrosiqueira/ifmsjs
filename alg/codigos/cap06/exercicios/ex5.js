// 5. Dados três inteiros, a soma deles é ímpar? Responda com SIM ou NÃO.

import scanf from "scanf";

console.log("digite três números:");
let x = scanf("%d");
let y = scanf("%d");
let z = scanf("%d");

let soma = (x+y+z)

console.log("A soma de", x, "+", y, "+", z, "é", soma)

console.log(soma, "é ímpar?")

if (soma%2!=0){
    console.log("Sim.");
}else{
    console.log("Não.");
}

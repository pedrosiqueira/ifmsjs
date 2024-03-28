/*
4. Dados dois números, ambos são pares?
*/

import scanf from "scanf"

console.log("escreva um numero: ");
let a = scanf("%d")
console.log("escreva outro numero: ");
let b = scanf('%d')


if (a % 2 == 0 && b % 2 ==0){
    console.log("SIM")
} else{
        console.log("NAO")
    }
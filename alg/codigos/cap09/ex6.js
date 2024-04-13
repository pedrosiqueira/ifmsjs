/*
6. Dados dois números, um deles é múltiplo do outro?
*/

import scanf from "scanf"

console.log('Digite o 1 número: ');
let a = scanf('%d')

console.log('digite o 2 numero: ');
let b = scanf("%d")

if (a % b == 0 || b % a == 0){
    console.log("Sim!")
}
else {   console.log("Não!")
}

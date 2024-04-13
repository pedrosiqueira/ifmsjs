/*
9. Dados três números, todos são múltiplos de 5 ou de 3?
*/

import scanf from "scanf"

console.log("digite o primeiro numer")
let n1 =  scanf("%f")

console.log("digite o segundo numero")
let n2 =  scanf("%f")

console.log("digite o erceiro numero")
let n3 =  scanf("%f")

if((n1 % 3 == 0 || n1 % 5 == 0) 
&& (n2 % 3 == 0 || n2 % 5 == 0) 
&& (n3 % 3 == 0 || n3 % 5 == 0)){
    console.log("sim")
}else{
    console.log("nao")
}
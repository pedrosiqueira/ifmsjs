// 7. Dados três números, qual o maior?

import scanf from "scanf";

console.log("dados 3 numeros o maior deles e ... :");
let x = scanf("%d");
let y = scanf("%d");
let z = scanf("%d");

let maior;



if (x>y){
maior= x;  
}else {
 maior = y;   
}
if (z > maior ) {
    maior=z;
}
console.log(maior,"e o maior numero ");

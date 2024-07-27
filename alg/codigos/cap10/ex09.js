// Dado um inteiro, quantos dígitos ele tem? (dica: vai dividindo por 10 até chegar no zero)

import scanf from "scanf"

let a= scanf ('%d')
let b=0
let c=1

while(a>=c){
    b=b+1
    c=c*10
}
console.log("O número contém ", b," digitos.")
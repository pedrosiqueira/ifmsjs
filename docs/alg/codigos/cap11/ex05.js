//exercicio 5
import scanf from 'scanf'
console.log ("digite o numero:")
let n= scanf ("%d")
for (let i=1 ; i<= n ; i++){
    if (n % i == 0)
        console.log (i,"e divisor")
}
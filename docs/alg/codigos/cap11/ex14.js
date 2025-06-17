// Dado um natural, qual seu fatorial?


import scanf from 'scanf';
 
console.log("escreva um numero natural")
let n = scanf('%d')
let res = n
for(let i = 1; i < n; i++ ){
    res *= i
}
console.log(res)
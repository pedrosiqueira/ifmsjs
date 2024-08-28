import scanf from 'scanf'

let n = scanf('%d')
let invertido = 0
while (n != 0) {
    let resto = n % 10
    invertido = invertido * 10 + resto
    n = Math.trunc(n / 10)
}
console.log(invertido)
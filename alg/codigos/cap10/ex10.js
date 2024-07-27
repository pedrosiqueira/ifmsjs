// Dado um natural, ele é primo?
import scanf from "scanf"

console.log("digite um numero: ")
let i = scanf("%d")
let divisores = 0
let d = 0

while (divisores <= i) {
    if (i % divisores == 0) {
        d++
    }
    else {
        d = d
    }
    divisores++
}

if (d >= 3) {
    console.log("não é primo")
}
else { console.log("é primo") }

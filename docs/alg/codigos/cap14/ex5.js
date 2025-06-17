import scanf from "scanf"

function primo(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false
        }
    }
    if (x == 1) {
        return false
    }
    return true
}

console.log('digite um número natural')
let numero = scanf("%d")

if (primo(numero)) {
    console.log(`${numero} é primo!`)
} else {
    console.log(`${numero} NÃO é primo!`)
}
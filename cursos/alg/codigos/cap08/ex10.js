/* Implemente o jogo Monty Hall em linguagem de programação. */

let portaSorteada = Math.trunc(Math.random() * 3)

let porta1 = false
let porta2 = false
let porta3 = false

if (portaSorteada == 0) {
    porta1 = true
} else if (portaSorteada == 1) {
    porta2 = true
} else {
    porta3 = true
}

console.log("Escolha a porta 1, 2 ou 3...");
let portaEscolhida = scanf("%d")

if (portaEscolhida == 1) {
    if (porta2 == true) {
        console.log("A porta 3 não tem o prêmio, você quer trocar de porta?")
    } else {
        console.log("A porta 2 não tem o prêmio, você quer trocar de porta?")
    }
}
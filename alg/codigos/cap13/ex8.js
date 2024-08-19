/* 8. Ler uma lista de n números. Escrever o índice do maior item. Caso haja empate, escrever o de menor índice. */

import scanf from 'scanf'

console.log("Digite a quantidade de números do vetor...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números do vetor...")
for (let i = 0; i < n; i++) {
    v.push(scanf("%d"))
}

let imaior = 0
for (let i = 1; i < n; i++) {
    if (v[i] > v[imaior]) {
        imaior = i
    }
}

console.log("O maior número é", v[imaior], "e ele se encontra no índice", imaior)
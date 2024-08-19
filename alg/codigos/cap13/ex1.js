/* 1. Ler uma lista de n itens. Escrever os n itens normalmente em uma linha e do último para o primeiro em outra linha. */

import scanf from 'scanf'

console.log("Quantos números queres digitar...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números...")
for (let i = 0; i < n; i++) {
    v.push(scanf("%d"))
}

console.log("Lista na ordem normal: ", v)

let reverso = ""
console.log("Lista na ordem invertida: ");
for (let i = n - 1; i >= 0; i--) {
    reverso += " " + v[i];
}
console.log(reverso)
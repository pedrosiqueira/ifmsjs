/* 7. Ler uma lista de n itens e um valor x. Escrever o primeiro índice em que x se encontra na lista. Caso x não se encontre, escrever "Não encontrado!".*/

import scanf from 'scanf'

console.log("insira um valor para x")
let x = scanf("%d")
console.log("Quantos números queres digitar...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números...")
for (let i = 0; i < n; i++) {
    v[i] = scanf("%d")
}
let xnalista = false

for (let i = 0; i < n; i++) {
    if (v[i] == x) {
        console.log("O elemento", v[i], "se encontra no índice", i)
        xnalista = true
        break
    }
}
if (!xnalista) {
    console.log("não encontrado!")
}
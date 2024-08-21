/* 13. Dada uma lista de n itens, há itens repetidos na lista? */

import scanf from 'scanf'

console.log("Quantos números queres digitar...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números...")
for (let i = 0; i < n; i++) {
    v.push(scanf("%d"))
}

let ha_repetidos = false
 
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (v[i] == v[j]) {
            console.log("Sim!", v[i], "se repete!")
            ha_repetidos = true
            i = j = n
        }
    }
}
 
if (!ha_repetidos) {
    console.log("Não há repetidos!")
}
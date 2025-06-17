/* 4. Ler uma lista de n números. Escrever os itens ímpares da lista. */

import scanf from 'scanf'

console.log("Quantos números queres digitar...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números...")
for (let i = 0; i < n; i++) {
    v[i] = scanf("%d")
}

console.log("Os números ímpares são: ")
for (let i = 0; i < n; i++) {
    if (v[i] % 2 != 0)
        console.log(v[i])
}
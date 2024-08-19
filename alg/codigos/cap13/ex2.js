/* 2. Ler uma lista de n números e dois índices x e y. Escrever a soma dos itens nos índices x e y. */

import scanf from 'scanf'

console.log("digite a quantidade de números do vetor...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números do vetor...")
for (let i = 0; i < n; i++) {
    v.push(scanf("%d"))
}

console.log("X e Y serão 2 números de indice que voce entre 0 a", n-1);
let x = scanf('%d');
let y = scanf('%d');

let soma = v[x] + v[y];
console.log("A soma dos indices x e y é", soma,":3") 


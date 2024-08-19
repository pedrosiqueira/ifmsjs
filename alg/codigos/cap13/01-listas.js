let qtd = 10  // comprimento do array
let nomes = ["maria", "ana", "francisca", "antonia", "adriana",
    "jose", "joao", "antonio", "francisco", "luiz"]

console.log("Imprimindo o array de uma vez:")
console.log(nomes)

console.log("\nImprimindo item por item:")
for (let i = 0; i < qtd; i++)
    console.log(nomes[i])

console.log("\nImprimindo item por item:")
for (let i = 0; i < qtd - 2; i++)
    console.log(`${nomes[i]},`)
console.log(nomes[qtd - 2], "e")
console.log(`${nomes[qtd - 1]}.`)

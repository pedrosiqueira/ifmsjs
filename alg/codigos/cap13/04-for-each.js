import scanf from 'scanf'

let frutas = ["pequi", "pera", "pêssego", "pitanga", "pinha", "pitaia"]

console.log("digite uma fruta que você gosta...")
let f = scanf("%s")

for (let fruta of frutas) {
    if (fruta == f) {
        console.log("Eu tenho essa fruta disponível!")
    }
}
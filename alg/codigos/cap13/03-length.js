let frutas = ["pequi", "pera", "pêssego", "pitanga", "pinha", "pitaia"]
let legumes = ["caxi", "cebola", "cenoura", "chuchu"]
 
let qtd_frutas = frutas.length
let qtd_legumes = legumes.length
 
console.log(`\nEu tenho ${qtd_frutas} frutas:`)
for (let i = 0; i < qtd_frutas; i++)
    console.log(frutas[i])
 
console.log(`\n\nTambém tenho ${qtd_legumes} legumes:`)
for (let i = 0; i < qtd_legumes; i++)
    console.log(legumes[i])
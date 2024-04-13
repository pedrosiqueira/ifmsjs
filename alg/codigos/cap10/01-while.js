import scanf from 'scanf';

console.log("Informe o capital inicial:")
let C = scanf("%f")
console.log("Informe a taxa de juros anual (por exemplo, 0.05 para 5%):")
let i = scanf("%f")
console.log("Informe a quantidade de anos de investimento:")
let t = scanf("%f")

for (let ano = 1; ano <= t; ano++) {
    let M = C * (1 + i) ** ano
    console.log(`Ao final do ${ano}º ano, o montante será de ${M}`)
}
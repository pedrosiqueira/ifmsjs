import scanf from "scanf"

let total = 0
let contador = 0
console.log("Digite a nota do estudante (ou -1 para encerrar): ")
let nota = scanf("%f")
 
while (nota != -1) {
    if (0 <= nota && nota <= 10) {
        total = total + nota
        contador = contador + 1
    } else {
        console.log("A nota deve estar entre 0 e 10. Tente novamente.")
    }
    console.log("Digite a nota do estudante (ou -1 para encerrar): ")
    nota = scanf("%f")
}
 
if (contador > 0) {
    let media = total / contador
    console.log("A média da classe é:", media)
} else {
    console.log("Nenhuma nota válida foi inserida.")
}

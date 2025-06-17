import scanf from "scanf"

// Inicialize as variáveis
let total = 0
let contador = 1

// Use um loop para ler as notas dos cinco estudantes
while (contador <= 5) {
    console.log(`Digite a nota do ${contador}º estudante (entre 0 e 10): `)
    let nota = scanf("%f")
    total = total + nota
    contador = contador + 1
}

// Calcule a média
let media = total / 5

// Escreva a média da classe
console.log("A média da classe é:", media)

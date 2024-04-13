import scanf from 'scanf';

// Inicialize as variáveis para contar os aprovados e reprovados
let aprovados = 0
let reprovados = 0

// Inicialize a variável para contar o número de estudantes
let contador = 0

// Use um loop while para ler os resultados de cada estudante
while (contador < 10) {
    console.log("Digite o nome do estudante:")
    let nome = scanf("%s")
    console.log("Digite o resultado do estudante ('a' para aprovado ou 'r' para reprovado):")
    let resultado = scanf("%s")

    // Verifique o resultado e atualize as contagens
    if (resultado == "a") {
        aprovados = aprovados + 1
    } else {
        reprovados = reprovados + 1
    }
    contador = contador + 1
}

// Escreva a quantidade de estudantes aprovados e reprovados
console.log("Quantidade de estudantes aprovados:", aprovados)
console.log("Quantidade de estudantes reprovados:", reprovados)

// Verifique se mais de oito estudantes foram aprovados
if (aprovados > 8) {
    console.log("Bônus ao instrutor!")
}
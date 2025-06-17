// 4. Dada a quantidade de estudantes da turma de Algoritmos, seguida pelas notas das provas de cada estudante, qual a maior nota e a média das notas dessa turma?


import scanf from 'scanf';

let total = 0 
let contador = 0

console.log("Digite a quantidade de estudantes na sala de aula")
let alunos = scanf("%f")


while (contador != alunos) {
console.log("Digite a nota de cada um dos estudantes")
let nota = scanf("%f")
    if (0 <= nota && nota <= 10) {
        total = total + nota
        contador = contador + 1 
    }else {
        console.log("a nota deve estar entre 0 e 10. tente novamente.")
    
}}
if (contador > 0) {
    let media = total / contador
    console.log("A medida da classe é:", media)
}
else {
    console.log("Nenhuma nota válida foi inserida.")
}
       



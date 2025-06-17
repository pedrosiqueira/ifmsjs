function funcao_secreta() {
    console.log("Só posso ser usado dentro do meu módulo")
}

export function saudacoes(nome) {
    console.log(`Seja bem-vindo, ${nome}!`)
}

let variavel_secreta = 'Siqueira'
export let nome = 'Pedro'

funcao_secreta()
saudacoes(variavel_secreta)

console.log("Terminei de ser importado ou executado!")
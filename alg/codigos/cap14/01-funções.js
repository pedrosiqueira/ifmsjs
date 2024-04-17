function funcao_externa() {

    function funcao_interna() {
        return "Esta é uma função interna."
    }

    const resultado = funcao_interna()
    return `A função externa invocou a função interna e obteve: ${resultado}`
}

console.log(funcao_externa())  // possível
console.log(funcao_interna())  // impossível
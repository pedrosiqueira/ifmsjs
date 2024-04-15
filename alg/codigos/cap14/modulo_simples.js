function soma(x, y) { // x e y são os parâmetros
    console.log('calculando soma...')
    const z = x + y
    return z
}

const a = 10, b = 20
const c = soma(a, b)
console.log(c)

console.log(soma(c, b))
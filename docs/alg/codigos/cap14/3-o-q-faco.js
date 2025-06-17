function funcaoMisteriosa(a, b) {
    let resultado = 0;
    for (let i = 1; i <= b; i++) {
        resultado += a % i;
    }
    return resultado;
}


let x = funcaoMisteriosa(20, 5)
let y = funcaoMisteriosa(10, 3)
let z = funcaoMisteriosa(15, 4)

console.log(x, y, z)
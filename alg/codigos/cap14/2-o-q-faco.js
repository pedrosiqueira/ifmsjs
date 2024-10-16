function funcaoMisteriosa(a, b) {
    let resultado = 1;
    for (let i = 0; i < b; i++) {
        resultado = (resultado * a) % 100;
    }
    return resultado;
}

let x = funcaoMisteriosa(7, 10)
let y = funcaoMisteriosa(2, 3)
let z = funcaoMisteriosa(5, 4)
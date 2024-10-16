function funcaoMisteriosa(x, y) {
    let resultado = 0;
    while (y > 0) {
        if (y % 2 === 1) {
            resultado += x;
        }
        x = x * 2;
        y = Math.trunc(y / 2);
    }
    return resultado;
}

let x = funcaoMisteriosa(3, 5)
let y = funcaoMisteriosa(7, 8)
let z = funcaoMisteriosa(12, 6)

console.log(x, y, z)
function funcaoMisteriosa(x, y) {
    let resultado = 0;
    while (y > 0) {
        if (y % 2 == 1) {
            resultado += x;
        }
        x = x * 2;
        y = Math.trunc(y / 2);
    }
    return resultado;
}

let x = funcaoMisteriosa(12, 6)
let y = funcaoMisteriosa(3, 5)
let z = funcaoMisteriosa(7, 8)

console.log(x, y, z)
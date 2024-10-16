function funcaoMisteriosa(arr) {
    let s = 0;
    let p = 1;

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
        p *= arr[i];
        console.log(`Elemento ${i}: ${arr[i]}, Soma: ${s}, Produto: ${p}`);
    }

    return s + p
}

let x = funcaoMisteriosa([2, 3, 4])
let y = funcaoMisteriosa([1, 5, 7])
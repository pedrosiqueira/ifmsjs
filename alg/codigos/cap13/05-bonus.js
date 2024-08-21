import scanf from 'scanf'

let v =    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// indices  0   1   2   3   4   5   6   7   8   9 (colinha)

// bônus 1
for (let i = 0; i < v.length; i++) {
    if (i % 3 == 0) {
        console.log(v[i])
    }
}

// bônus 2
for (let i = 0; i < v.length; i++) {
    if (v[i] % 3 == 0) {
        console.log(v[i])
    }
}

// bônus 3
let a = 4, b = 1
let tmp = v[a]
v[a] = v[b]
v[b] = tmp
console.log(v)

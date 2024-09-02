import scanf from 'scanf'

console.log("Quantos números queres digitar...")
let n = scanf("%d")
let v = []

console.log("Ok, agora, digite os", n, "números...")
for (let i = 0; i < n; i++) {
    v[i] = scanf("%d")
}
let x= scanf ("%d")
let y= scanf("%d")
let soma= v[x] + v[y]
console.log ("a soma de x+y e", soma)
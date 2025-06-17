import scanf from "scanf";

console.log("Digite 3 números...");
let x = scanf("%d");
let y = scanf("%d");
let z = scanf("%d");
let maior;

if (x > y) {
    if (x > z) {
        maior = x;
    } else {
        maior = z;
    }
} else {
    if (y > z) {
        maior = y;
    } else {
        maior = z;
    }
}

console.log(maior, "é o maior número");

if (maior % 2 !== 0) {
    console.log("e também é ímpar");
} else {
    console.log("e também é par");
}
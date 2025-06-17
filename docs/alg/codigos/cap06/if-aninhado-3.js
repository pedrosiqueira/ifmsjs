import scanf from "scanf";

console.log("Digite 3 números...");
let x = scanf('%d');
let y = scanf('%d');
let z = scanf('%d');
let maior;

if (x > y) {
    maior = x;
} else {
    maior = y;
}

if (z > maior) {
    maior = z;
}

console.log(maior, "é o maior número");

if (maior % 2 !== 0) {
    console.log("e também é ímpar");
} else {
    console.log("e também é par");
}
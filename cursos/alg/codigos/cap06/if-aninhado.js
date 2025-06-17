import scanf from "scanf";

console.log("Digite 3 números...");
let x = scanf("%d");
let y = scanf("%d");
let z = scanf("%d");

if (x > y) {
    if (x > z) {
        console.log(x, "é o maior número");
        if (x % 2 !== 0) {
            console.log("e também é ímpar");
        } else {
            console.log("e também é par");
        }
    } else {
        console.log(z, "é o maior número");
        if (z % 2 !== 0) {
            console.log("e também é ímpar");
        } else {
            console.log("e também é par");
        }
    }
} else {
    if (y > z) {
        console.log(y, "é o maior número");
        if (y % 2 !== 0) {
            console.log("e também é ímpar");
        } else {
            console.log("e também é par");
        }
    } else {
        console.log(z, "é o maior número");
        if (z % 2 !== 0) {
            console.log("e também é ímpar");
        } else {
            console.log("e também é par");
        }
    }
}
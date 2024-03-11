import scanf from "scanf";

console.log("Boletim Digital");
console.log("###############\n");

console.log("Trabalho:");
let t = scanf("%f");
console.log("Seminário:");
let s = scanf("%f");
console.log("Prova:");
let p = scanf("%f");

let m = (t * 2 + s * 3 + p * 5) / 10;

console.log("\nMédia:", m);

if (m >= 8.5) {
    console.log("Conceito A, aprovado :D");
} else if (m >= 7) {
    console.log("Conceito B, aprovado :)");
} else if (m >= 5) {
    console.log("Conceito C, recuperação :|");
} else if (m >= 2.5) {
    console.log("Conceito D, recuperação :(");
} else {
    console.log("Conceito E, reprovado :O");
}

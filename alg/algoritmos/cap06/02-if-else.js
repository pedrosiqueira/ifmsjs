import scanf from "scanf";
 
console.log("\nInforme teu salario: ");
let salario = scanf("%f")
 
console.log("\nVocê ganha", salario);
if (salario > 5000) {
    console.log("Você está bem, ein!");
} else {
    console.log("Você ainda chega lá!");
}
 
console.log("\nInforme tua nota: ");
let nota = scanf("%f")
 
console.log("\nVocê tirou nota", nota);
if (nota < 7)
{
    console.log("Você está de recuperação!");
}
else
    console.log("Você passou de ano!");
 
console.log("\nInforme teu numero da sorte: ");
let numero = scanf("%d")
 
console.log("\nTeu número da sorte é", numero);
if (numero % 2 == 0) console.log("Número par");
else console.log("Número ímpar");
 
if (numero % 5 == 0) 
    console.log("Número múltiplo de 5.");
else
    console.log("Número NÃO múltiplo de 5.");
 
console.log("\nInforme tua idade: ");
let idade = scanf("%d")
 
console.log("\nTua idade é", idade);
if (idade >= 18) {
    console.log("Você é maior de idade,");
    console.log("Já é responsável legalmente.");
}
else
{
    console.log("Você ainda é menor de idade");
}
 
console.log("\nFim do programa.");

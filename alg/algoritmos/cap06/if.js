import scanf from "scanf";
 
console.log("Informe teu salario: ");
let salario = scanf("%f")
 
console.log("\nVocê ganha", salario);
if (salario > 5000) {
    console.log("Você está bem, ein!");
}
 
console.log("Informe tua nota: ");
let nota = scanf("%f")
 
console.log("\nVocê tirou nota", nota);
if (nota < 7)
{
    console.log("Você está de recuperação!");
}
 
console.log("Informe teu numero da sorte: ");
let numero = scanf("%d")
 
console.log("\nTeu número da sorte é", numero);
if (numero % 2 == 0) console.log("Número par");
 
if (numero % 5 == 0) 
    console.log("Número múltiplo de 5.");
 
console.log("Informe tua idade: ");
let idade = scanf("%d")
 
console.log("\nTua idade é", idade);
if (idade >= 18) {
    console.log("Você é maior de idade,");
    console.log("Já é responsável legalmente.");
}
 
console.log("\nFim do programa.");

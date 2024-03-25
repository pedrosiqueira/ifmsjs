/* Dado o valor do saque realizado pelo cliente de um banco, quantas notas de cada valor serão necessárias para atender ao saque com a menor quantidade de notas possível? Podem ser utilizadas notas de $100, $50, $20, $10, $5, $2 e $1. */

import scanf from 'scanf';

console.log("Valor do saque:")
let saque = scanf("%d")

let notas100 = Math.trunc(saque / 100)
saque = saque % 100

let notas50 = Math.trunc(saque / 50)
saque = saque % 50

let notas20 = Math.trunc(saque / 20)
saque = saque % 20

let notas10 = Math.trunc(saque / 10)
saque = saque % 10

let notas5 = Math.trunc(saque / 5)
saque = saque % 5

let notas2 = Math.trunc(saque / 2)
saque = saque % 2

let notas1 = saque

console.log("Você receberá:")
console.log(notas100, "notas de R$100")
console.log(notas50, "notas de R$50")
console.log(notas20, "notas de R$20")
console.log(notas10, "notas de R$10")
console.log(notas5, "notas de R$5")
console.log(notas2, "notas de R$2")
console.log(notas1, "notas de R$1")
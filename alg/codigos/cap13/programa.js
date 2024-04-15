import scanf from 'scanf';
import { soma } from './modulo_simples.js'

console.log("digite um número: ")
let a = scanf("%d")
console.log("digite outro número: ")
let b = scanf("%d")
let c = soma(a, b) // a e b são os argumentos
console.log(`a soma de ${a} com ${b} é ${c}`)

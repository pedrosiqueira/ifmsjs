// Para invocar uma função que retorna um valor, usamos uma variável para armazenar o valor retornado pela função
const n32 = Math.pow(2, 5)
console.log(n32) // 32.0

// Podemos imprimir diretamente o valor retornado por uma função
console.log(Math.pow(5, 3)) // 125.0

// Podemos passar uma expressão como argumento, desde que seu valor seja equivalente ao argumento esperado pela função
console.log(Math.pow(2 * 3 - 1, -5 + 16 / 2)) // 125.0

// Podemos até usar o retorno de uma função como argumento para outra função
const cateto1 = 6
const cateto2 = 8
const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
console.log(hipotenusa) // 10.0
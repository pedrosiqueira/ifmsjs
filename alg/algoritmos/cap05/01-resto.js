let dividendo = 17;
let divisor = 5;
let cociente = Math.trunc(dividendo / divisor);
let resto = dividendo % divisor;
console.log(dividendo, ' = ', divisor, ' * ', cociente, ' + ', resto);
// 17 = 5 * 3 + 2





console.log(Math.trunc(5 / 2));  // -2
console.log(Math.round(5 / 2))  // -3



let num = 123;
let unidade = num % 10;
num = Math.trunc(num / 10);
let dezena = num % 10;
num = Math.trunc(num / 10);
let centena = num % 10;

console.log(centena, dezena, unidade)
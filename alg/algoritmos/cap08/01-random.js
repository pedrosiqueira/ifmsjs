// // Sorteia um float no intervalo [0,1)
// let sorteado = Math.random();
// console.log(sorteado);

// // Transforma em um float entre [0,10)
// sorteado *= 10;
// console.log(sorteado);

// // Descarta a parte decimal
// let int_sorteado = Math.trunc(sorteado);
// console.log(int_sorteado);





// let n = 20
// let sorteado = Math.trunc(Math.random() * n)
// console.log(sorteado)




// let primeiro = 10
// let ultimo = 20
// let quantidade = ultimo - primeiro + 1
// let sorteado = primeiro + Math.trunc(Math.random() * quantidade)
// console.log(sorteado)


for(let i=0;i<100;i++){
let primeiro = 50
let ultimo = 100
let diferenca = 5
let quantidade = (ultimo - primeiro) / diferenca + 1
let sorteado = primeiro + diferenca * Math.trunc(Math.random() * quantidade)
console.log(sorteado)
}
/* Dadas duas letras, quantas letras há entre as duas? */

import scanf from 'scanf';

console.log("Digite duas letras:")

let l1 = scanf("%s")
let l2 = scanf("%s")

let cod1 = l1.charCodeAt()
let cod2 = l2.charCodeAt()

let diff = cod2 - cod1

console.log(`entre ${l1} e ${l2} há ${diff} letras.`)
/*
// voce tbm pode fazer assim:
console.log('entre', l1, 'e', l2, 'há', diff, 'letras')
*/
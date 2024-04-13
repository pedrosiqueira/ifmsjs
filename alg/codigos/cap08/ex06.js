/* Gerar uma letra aleatória entre 'A' e 'Z'. */

let primeiro = 'A'.charCodeAt()
let ultimo = 'Z'.charCodeAt()
let quantidade = ultimo - primeiro + 1
let sorteado = primeiro + Math.trunc(Math.random() * quantidade)

let letraSorteada = String.fromCharCode(sorteado)

console.log("Letra sorteada:", letraSorteada)

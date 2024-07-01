function soma_com_dois(numero) {
    return numero + 2
}

function multiplica_por_dois(numero) {
    return numero * 2
}

const s = 'dois'
console.log(soma_com_dois(s))
console.log(multiplica_por_dois(s))
console.log()

const n = '2.4'
console.log(soma_com_dois(n))
console.log(multiplica_por_dois(n))
console.log()

const f = parseFloat(n)
console.log(soma_com_dois(f))
console.log(multiplica_por_dois(f))
console.log()

const i = parseInt(n)
console.log(soma_com_dois(i))
console.log(multiplica_por_dois(i))
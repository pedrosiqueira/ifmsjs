function a(param) {
    console.log('um')
    console.log(param)
    console.log('três')
}

function b(param) {
    console.log(param)
    console.log('segundo')
    console.log('terceiro')
}

console.log('antes')
a('two')
console.log('durante')
b('first')
console.log('depois')
a('dos')

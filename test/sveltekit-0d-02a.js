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
b('two')
console.log('durante')
a('first')
console.log('depois')

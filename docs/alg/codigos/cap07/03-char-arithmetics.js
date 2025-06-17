let c1 = "d"
let c2 = "h"
let n1 = 7
 
let c3 = String.fromCharCode(n1 + c1.charCodeAt())
console.log(n1, "letras depois de", c1, "é", c3)
 
let n2 = c2.charCodeAt() - c1.charCodeAt() - 1
console.log("há", n2, "letras entre", c1, "e", c2)
 
let c4 = c1.charCodeAt() * c2.charCodeAt()
console.log(c1, "*", c2, "=", c4)
 
let n3 = c1.charCodeAt() + c2.charCodeAt()
console.log(c1, "+", c2, "=", n3)

console.log('a'*3);
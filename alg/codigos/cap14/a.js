export let x = 10

export function getX() {
    console.log(x)
}

export function setX(newvalue) {
    x = newvalue
}

x = 20
console.log(x)

setX(30)
getX()
let i = 1
while (i <= 10) {
    console.log(i)
    if (i % 4 == 0) {
        console.log("pula")
        continue
    }
    console.log(i)
    i += 1
}
console.log("fim!")

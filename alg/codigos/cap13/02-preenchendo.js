import scanf from 'scanf'

let N = 5
let nums = []

for (let i = 0; i < N; i++) {
    console.log(`Informe o ${i + 1}º número: `)
    let num = scanf("%d")
    nums[i] = num
}

console.log("Você digitou os seguintes números:")
for (let i = 0; i < N; i++)
    console.log(nums[i])

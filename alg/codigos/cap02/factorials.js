function calculateSumOfFactorials(argument1, argument2) {
    let factorial1 = calculateFactorial(argument1);
    let factorial2 = calculateFactorial(argument2);
    let result = calculateSum(factorial1, factorial2);
    return result;
}

function calculateFactorial(argument) {
    let factorialResult = 1;
    for (let i = 1; i <= argument; i++) {
        factorialResult *= i;
    }
    return factorialResult;
}

function calculateSum(argument1, argument2) {
    return argument1 + argument2;
}

let a = 5;
let b = 10;
let sumOfFactorials = calculateSumOfFactorials(a, b);
console.log("The sum of factorials of the entered integers is", sumOfFactorials);
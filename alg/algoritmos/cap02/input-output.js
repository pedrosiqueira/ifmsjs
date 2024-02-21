import scanf from 'scanf';

console.log('Please input your name');
let name = scanf('%s');

console.log('Please input your age');
let age = scanf('%d');

console.log('your name [%s] type: [%s]', name, typeof name);
console.log('your age [%s] type: [%s]', age, typeof age);
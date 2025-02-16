import { addNumbers, addNumbers2, greet, printId, sum } from "./functions"

console.log(addNumbers(1, 2))
console.log(addNumbers2(1, 2))
// this won't work: console.log(addNumbers(1, 'foo'))

console.log(greet('John'))
console.log(greet('John', 'Hi'))

printId(1)
printId('abc')

// sum takes a variable number of arguments (rest parameters)
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
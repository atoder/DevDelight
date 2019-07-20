// 1. What is the difference between === and == ?
let num = 1;
let num2 = 1;

console.log(num == num2);
console.log(num === num2);

let str = '1';
let number = 1;

// FORGET THIS!
console.log(str == number);

// ALWAYS USE THIS
console.log(str === number);

// 2. What about != and !==
console.log(str != number);

console.log(str !== number);

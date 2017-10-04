/*
 * typeof operator returns the type of a given value (argument)
 * in a string format
 *
 * This is useful when you want to check the type of the variable
 * or execute different code blocks based on the type
 *
 * There are 7 types you can test for in JavaScript
 *
 */

// 1) 'boolean'
console.log(typeof false);

// 2) 'undefined'
console.log(typeof undefined);

// 3) 'number'
console.log(typeof 7);

// 4) 'string'
console.log(typeof '7');

// 5a) 'object'
console.log(typeof {name: 'Alex'});

// 5b) 'object'
console.log(typeof null);

// 6) 'function'
console.log(typeof function name(){});

// ES6 version
// 7) 'symbol'
console.log(typeof Symbol());

var devdelight = '7';

if (typeof devdelight === 'number') {
  console.log(devdelight++);
} else if(typeof devdelight === 'string') {
  console.log('This is a string: ' + devdelight);
} else {
  console.log('Default case');
}









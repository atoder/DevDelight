


console.log(window);
console.log(this);

// global execution context
let greeting = 'Hello World';

// helloWorld execution context
function helloWorld() {
  let str = 'Hello World 2';
  console.log(str);
  console.log(this);
  this.testing = 'test';
}
helloWorld();

console.log(testing);

let objTest = {
    str: 'Hello world 3',
    print: function() {
      this.str = 'Good bye';
      console.log(this);
    }
}
objTest.print();

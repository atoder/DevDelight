// setTimeout() - executes a function once
// after number of milliseconds

// setInterval() - executes a function over
// and over after number of milliseconds

var counter = 0;
var intervalId = setInterval(printHelloWorld, 2000);
function printHelloWorld() {
  counter++;
  console.log('Hello World: ' + counter);
  if (counter === 4) {
    clearInterval(intervalId);
  }
}

let idTimeOut = setTimeout(printHelloWorld, 2000);
clearTimeout(idTimeOut);
console.log('Bye Bye World');




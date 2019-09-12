/*
 * Immediately Invoked Function Expression - (IIFE)
 */

let welcomeAgain = function (firstName) {
  console.log('Welcome ' + firstName);
}

function welcome(firstName) {
  console.log('Welcome for the first time ' + firstName);
}

welcome('Alex');
welcomeAgain('Alexander');

let welcomeAgainV2 = function() {
  console.log('welcome again v2');
}();

(function (randomVar) {
  console.log(randomVar);
})('testing');

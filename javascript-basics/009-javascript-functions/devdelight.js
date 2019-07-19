
greetings('Alex');
greetings('DevDelight.com');

function greetings(name) {
  console.log('---------------');
  console.log("Greeting, " + name);
  console.log('---------------');
}


function sum(a, b) {
  return a + b;
}

console.log(sum(1,2));

var text = 'baby';
var hastaLavista = function () {
  console.log('hasta la vista ' + text);
}

hastaLavista();


var hastaLavista2 = function () {
  var text2 = 'Arnold';
}


hastaLavista2.test = 'testing';
console.log(hastaLavista2.test);


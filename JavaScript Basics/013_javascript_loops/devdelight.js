// while
var counter = 0;

while (counter < 6) {
    console.log(counter);
    counter++;
}

// do while
counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter < 0)

// for
for (counter = 4; counter < 8; counter+=2) {
    console.log('for loop: ' + counter);
}

// break; statement
while (true) {
    counter++;
    console.log('true' + counter);
    if (counter === 14) break;
}

// continue; statement
while (true) {
    counter++;
    if (counter === 18) continue;
    console.log('continue: ' + counter);
    if (counter === 22) break;
}

// for in
var car = {name: 'Tesla', doors: 4, year: 2018}
for (var prop in car) {
    console.log(prop + ' ' + car[prop]);
}

// for of
var car_arr = ['Tesla', 'BMW', 'Toyota'];
for (var value of car_arr) {
    console.log(value);
}

// forEach
car_arr.forEach(function (value, idx, car_arr) {
    console.log('foreach: ' + idx + ' ' + value);
}, this);

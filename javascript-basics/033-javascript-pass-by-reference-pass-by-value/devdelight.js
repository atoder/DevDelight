// Primitives - Pass By Value
// Booleans, strings, numbers

/*
 *let lData = 'a';
 *console.log(lData);
 *function modifyChar(lData) {
 *  lData = 'b';
 *  console.log(lData);
 *}
 *modifyChar(lData);
 *console.log(lData);
 */

// Arrays and Objects - Pass By Reference

let car = {
  name: 'Tesla',
  year: 2020
};
console.log(car);

function modifyObj(car) {
  car.name = 'BMW';
  car.color = 'white';
  console.log(car);
  car = {};
}
modifyObj(car);
console.log(car);


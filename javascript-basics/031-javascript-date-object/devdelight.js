
// year, month, day, hours, minutes, seconds, and milliseconds
let date = new Date(2020, 0, 1, 1, 1, 1, 1);
console.log(date);

let date2 = new Date();
console.log(date2);
console.log(date2.toDateString());
console.log(date2.toTimeString());

// UTC is actually time standard that all the time zones are based on
// GMT is the time zone
console.log(date2.toUTCString());
console.log(date2.getMonth());
console.log(date2.getFullYear());
console.log(date2.getTime());

let date3 = new Date("April 20 2040");
console.log(date3.toString());

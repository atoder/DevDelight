/* Primitive Values */
// 1) Boolean
var flag = true;
//flag = false;
console.log(flag);


// 2) null

var nullVariable = null;
console.log('nullVariable:' + nullVariable);

// 3) undefined
var undefineVariable;
console.log('undefinedVariable:' + undefineVariable);

// 4) Number
var number = 4;
var number2 = 1;
console.log(number + number2);

// 5) String
var strVar = 'devdelight.com' + ' - Development Done Right';
console.log(strVar);

// 6) Symbol - ES6


/* 7) Object (unordered list) */
var classroom = {};
// var classroom = new Object();
classroom.student = 'Alex';
classroom.school = 'DevDelight.com';
console.log('Object: ' + JSON.stringify(classroom));

//Array (also an object but an ordered list or numberically ordered)

//var classroomArr = [];
//var classroomArr = new Array();

var classroomArr = ['apple', 'banana', 'cherry'];
console.log(classroomArr);



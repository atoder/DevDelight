var testStr = 'Hello \nWorld\'';
var testStr2 = 'Hello \tWorld 2\t';

console.log(testStr);
console.log(testStr2);

// Retreieving a character
console.log(testStr[1]);


// Concatenate
var full = 'www.' + ' ' + testStr;
console.log(full);

full += testStr2;
console.log(full);

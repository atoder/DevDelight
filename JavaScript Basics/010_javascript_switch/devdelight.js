//var time = 12;

//if (time === 8) {
//  console.log('Good morning');
//} else if (time === 12) {
//  console.log('Lunch Time');
//} else if (time === 22) {
//  console.log('Bed Time');
//} else {
//  console.log('I am not sure what time it is');
//}


var time = 8;

switch (time) {
  case 8:
  case 9:
    console.log('Good morning');
    break;
  case 12:
  case 13:
    console.log('Lunch Time');
    break;
  case 22:
    console.log('Bed Time');
    break;
  default:
    console.log('I am not sure what time it is');
}

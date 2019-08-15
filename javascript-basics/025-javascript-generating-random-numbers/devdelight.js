// Math.random()
// generates floating point from 0 up to but not including 1
//
// Math.floor()
// returns the largest integer number less than
// or equal to the number we pass to it as a parameter

function getRandomNum(end) {
  return Math.floor(Math.random() * end);
}

function getRangeRandomNum(start, end) {
  // start up to end
  // end = 11
  // start = 5
  // end - start = 6
  // 0 up to 6
  // + 5
  return Math.floor(Math.random() * (end - start)) + start;
}

for (let i = 0; i < 5; i++) {
  //console.log(Math.random());
  //console.log(getRandomNum(5));
  console.log(getRangeRandomNum(5, 11));
}

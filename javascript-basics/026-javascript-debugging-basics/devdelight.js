function getRangeRandomNum(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}

for (let i = 0; i < 5; i++) {
  debugger;
  // throw new Error('this is a test');
  console.log(getRangeRandomNum(5, 11));
}

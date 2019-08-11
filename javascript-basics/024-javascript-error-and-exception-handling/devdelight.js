// try - allows you to test a block for errors
// catch - allows you to catch the error only if the error
// occured in the try block
// finally - always executes after try and catch scope
// throw - allows you to create and throw your errors

let userInput = 0;

try {
  //devdelight;
  let devdelight = 'awesome';
  if (userInput === 0) throw new Error('Invalid input number');
} catch (err) {
  console.log(err.message);
}
finally {
  console.log('Exit');
}

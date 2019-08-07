var name = 'Alexander';
console.log(name);

// bag with related information
// or collection of name and values
var personObj = {
  name: 'Alexander',
  gender: 'male',
  style: 'savage',
  location: {
    city: 'San Francisco',
    state: 'California',
    zipcode: 94118
  }
};
// var personObj = new Object();
// var personObj = {};
// personObj.name = 'Alexander';
console.log(personObj['name']);
console.log(personObj['location']['zipcode']);
console.log(personObj.style);

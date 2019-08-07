var personObj = {
  name: 'Alexander',
  gender: null,
  style: 'savage',
  location: {
    city: 'San Francisco',
    state: 'California',
    zipcode: 94118
  }
};
//console.log(personObj['name']);

//console.log(personObj);

// How do I remove a property from JavaScript
// 1st way
delete personObj.name;

// 2nd
delete personObj['location']['zipcode'];
console.log(personObj);

// 3rd
let deleteProperty = 'city';
delete personObj[deleteProperty];

// How do I check if a property is in an object?

// 1st
if (personObj.gender) {
  console.log('true');
}

// 2nd
if (personObj.hasOwnProperty('gender')) {
  console.log('true');
}

// 3rd
if ('gender' in personObj) {
  console.log('true');
}

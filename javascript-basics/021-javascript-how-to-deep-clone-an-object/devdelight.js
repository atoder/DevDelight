var personObj = {
  name: 'Alexander',
  style: 'C'
};
var address ={
    location: {
    city: 'San Francisco',
    state: 'California',
    zipcode: 94132
  }
};
// shallow copy - es5
//var personAddressObj = Object.assign(address, personObj)
// target, sources
var personAddressObj = Object.assign({}, address, personObj);
//console.log('personAddressObj:', personAddressObj);
console.log('address:', address);
var addressCopy = Object.assign({}, address);
address.location.city = 'San Diego';
console.log('addressCopy - shallow copy: ', addressCopy);

// deep copy - es5
var addressDeepCopy = JSON.parse(JSON.stringify(address));
address.location.city = 'New York';
console.log('deep copy: ', addressDeepCopy);


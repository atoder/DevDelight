// name and value pair
// data is separated by commas
// types: Objects, strings, numbers, arrays,
// booleans, and null
// name should always be a string


let jsonData = {
  "name": "Alexander",
  "location": {
    "city": "San Francisco",
    "zipcode": 94132
  },
  "language": ["Russian", "English", "C", "JavaScript"],
  "human": true,
  "mood": null
}
console.log(jsonData);

let stringifiedData = JSON.stringify(jsonData);
console.log(stringifiedData);


let jsonParsed = JSON.parse(stringifiedData);
console.log(jsonParsed);

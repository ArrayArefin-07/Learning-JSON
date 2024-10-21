const data = require("./friendsData.json");
// console.log(data);
// console.log(data.friends[0]);

// console.log(data.friends[0].name);

// change json data
// data.friends[0].name = "Oakil Sarker";
// console.log(data.friends[0].name)

// delete data.friends[0].name;
// console.log(data);

// const data2 = require("./studentsData.json");
// console.log(data2.students[2].languages[1])

//looping json Data

// for (x in data2) {
//   // console.log(x);
//   console.log(data2[x]);
// }

// converting js object to JSON
const data2 = {
  name: "arefin",
  age: 25,
}

// conver to JSON formate
console.log(JSON.stringify(data2));

// convert to JSON to Js object
console.log(JSON.parse('{"name" : "Mobasher"}'))

const getAllProperties = obj => [...Object.keys(obj)].join(",");

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(getAllProperties(student));
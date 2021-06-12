
//?  Creating an object 

const Car = {
    name : "XF",
    company : "Jaguar",
    ownerName : "Kartik Gupta",
    location : "India",
    state : "ON",
    start : () => {console.log("Engine starting");},
    getEngineState : () => "Engine is " + Car.state === "ON" ? "ON" : "OFF",
    fuelYourself : () => "Fuelling tank automaticallly"
};

let Car2 = {
    name : "Vento",
    company : "Volkswagen",
    ownerName : "Kartik",
    location : "India",
    state : "ON",
    start : () => {console.log("Engine revving");},
    getEngineState : () => "Car 2 Engine STATE :" + Car2.state === "ON" ? "ON" : "OFF",
    fuelYourself : () => "Ye suvidha uplabdh nahi hai."
};

// console.log(Car);
// console.log(Car2);

//? Properties of an object can be accessed by dot notation as well as square bracket notation.
// console.log(Car.name);
// console.log(Car.getEngineState);

// console.log(Car["name"]);
// console.log(Car2["getEngineState"]);

// console.log(Car.getEngineState());

//? All entities that have a system of key value pairs can be treated as objects in JS.
//? More key value pairs can be also added. irrespective of whether obj is let or const
// Car.maikyahu = "gaadi";

// console.log(Car);

//? Creating objects in JS :

//? 1. Using JSON notation (like Car)
//? 2. using new keyword
// const newObj2 = new Object({
//     name : "Vento",
//     company : "Volkswagen",
//     ownerName : "Kartik",
//     location : "India",
//     state : "ON",
//     start : () => {console.log("Engine revving");},
//     getEngineState : () => "Car 2 Engine STATE :" + Car2.state === "ON" ? "ON" : "OFF",
//     fuelYourself : () => "Ye suvidha uplabdh nahi hai."
// });
//? 3. using Object.create()
const newObj3 = Object.create({
    name : "Vento",
    company : "Volkswagen",
    ownerName : "Kartik",
    location : "India",
    state : "ON",
    start : () => {console.log("Engine revving");},
    getEngineState : () => "Car 2 Engine STATE :" + Car2.state === "ON" ? "ON" : "OFF",
    fuelYourself : () => "Ye suvidha uplabdh nahi hai."
});

var a = 1+1;

//! below line shows empty pata karo.
console.log(newObj3);

console.log(newObj3.ownerName);
console.log(Object.keys(Car));

//? Objects in JS are special and they reflect a change in properties. This is due to passing of a reference rather than the whole object. This is an add on to the performance.
// var copyOfCar = Car;
// copyOfCar.name = "XF Limited Edition";
// console.log(copyOfCar);
// console.log(Car);

//? for iterating over an object we use for loop with in operator

//? we also have object type-specific functions like Object.keys(objname)  for accessing all keys as a list, Object.value(objname) for accessing all value as a list, etc
//? Object.freeze(objname) makes object freeze i.e. immutable.



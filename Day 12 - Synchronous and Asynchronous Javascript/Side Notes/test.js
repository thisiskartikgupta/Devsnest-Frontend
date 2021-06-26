//? Synchronous JavaScript

// console.log(1);
// console.log(2);
// console.log(3);

//? Asynchronous JavaScript

console.log(1);

setTimeout( () => {
    console.log(2);
}, 1000);

setTimeout( () => {
    console.log(3);
},1001);


//? Event loop
//? Blocking non blocking


//! Resources :
//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//? Array is a collection of elements of all forms of  data types.
//? We access elements in array by use of indexing ,beginning from 0 to n-1 for an array of n elements.

// arr = [1,3,4,2,5]
// console.log(arr)
// console.log(typeof(arr)) //Arrays are objects in JS.
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[5]) // Accessing not existing values will give us undefined.
// console.log(arr.length);


//? JS provides a wide variety of functions for array operations. For eg : concat(), join(), slice(), indexOf(), lastIndexOf()

// arr1 = [1, 3, 4, 5, 2]
// arr2 = [11, 1.1, 66,  77, 88, 99]   // In js , decimals and integers both are same data type i.e. Number.
// arr3 = ["c", "a", "t", "i", "g", "now", 1 , true]


// // console.log(arr1.concat(arr2));  // concat function returns an array that returns a concatenated array. It does not affect either of the arrays.
// // console.log(arr1);

//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// // console.log(arr3.join(arr2)); //! join() accepts string as parameter, other me cartesian lekar garbage de dega.
// console.log(arr3.join());
// console.log(arr3.join(""));
// console.log(arr3.join("-"));


//? Iterating over arrays
 
a = [1, 'a', "212'3'", "2123", 2.232, true, false ];

//? forEach loop
// a.forEach((element, index) => {

//     console.log(element + " @ " + index);
// });

//? for of loop
// for(let element of a){
//     console.log(element);
// }

//? for in loop . Generally used for looping over objects but will help us access index also since Array is also an object.
// for(let index in a) {
//     console.log(index, a[index]);
// }

//? Standard for loop
// for(let i = 0; i < a.length; i++) {
//     console.log(i, a[i]);
// }


//! some and every need to have a boolean function which is always initiated
//? some function use karke
// cam use logic here too
//console.log(a.some(item => console.log(item)));

//? every use karke

// console.log(a.every(item => console.log(item)));


//! Diff b/w some and every (copy paste stackoverflow)
// some will return true if any predicate is true

// every will return true if all predicate is true

// Where predicate means function that returns bool ( true/false) for each element

// every returns on first false.
// some returns on first true
// var identity = function(x){return x}
// console.log([true, true].some(identity))//true
// console.log([true, true].every(identity))//true
// console.log([true, false].some(identity))//true
// console.log([true, false].every(identity))//false
// console.log([false, false].some(identity))//false
// console.log([false, false].every(identity))//false
// console.log([undefined, true].some(identity))//true
// console.log([undefined, true].every(identity))//false
// console.log([undefined, false].some(identity))//false
// console.log([undefined, false].every(identity))//false
// console.log([undefined, undefined].some(identity))//false
// console.log([undefined, undefined].every(identity))//false


//? array filter function .It generates a new array that satisfies the condition ie returns true from the predicate.
// console.log(a.filter(item => typeof(item) == 'string'))
// console.log(a)
//Returns an array always

//? map function . It applies a certain function to every element.
// console.log(a.map(item => item += 100))
// console.log(a)


//? reduce function. Reduces an array into something other type.
// console.log(a.reduce((acc, element) => {
//     acc +=element;
//     return acc;
// }),0);
// console.log(a);


//? Array push(), pop() like stack. reverse() like its name

b = [1, 10 , 4]
console.log(b.sort((a,b) => b-a));

//? splice(), 
//? shift() pops out the first element and modifies the array,
//? unshift() adds an element to the end.
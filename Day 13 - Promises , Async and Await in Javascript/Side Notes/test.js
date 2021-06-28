//? Promises in Javascript
//? A promise has three states : "resolve", "reject" and "pending"

// const myPromise = new Promise();
// console.log(myPromise);  //! Raised undefined TypeError as there needs to be a function inside the promise

// const myPromise = new Promise( (resolve, reject) => {

//     let a = 1 + 1;
//     if(a === 3) {
//         // pending("Nhi bataunga")
//         resolve("Promise poora hua");
//     }
//     else {
//         reject("Kya hua tera vaada");
//     }
// });
//? Entire JSON objects can be passed in resolve()/reject()

// console.log(myPromise); //! Shows Promise { <pending> }

// myPromise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

///? Fetch API
// fetch("https://api.github.com/users/thisiskartikgupta")
// .then(res => {console.log(res.json)});

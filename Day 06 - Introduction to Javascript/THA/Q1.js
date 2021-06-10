
const is_array = param => Array.isArray(param);

// Lol just testing
// const is_array = (param) => {

//     // return (Array.isArray(param)) ? true : false;

//     //console.log(param.constructor == Array);
//     //console.log(Array.isArray(param));
//     //param instanceof Array;
//     //console.log(typeof(param) == "object");
// }

//? Test cases
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));




const array_Clone = params => [...params];

// Testing
// const array_Clone = (params) => {

//     new_arr = [];
        
//     params.forEach(param => {
//         new_arr.push(param);
//     });

//    new_arr = params.slice();
//     return new_arr;
// }

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));




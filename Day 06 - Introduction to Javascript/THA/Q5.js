// const getOccurence = (arr, val) => {
//     return arr.reduce((acc, element) => {
//         element === val ? acc + 1 : acc
//     },0);
// };

// const getMaxOccurence = (arr) => {

//     //let distinctArr = [...new Set(arr)];
//     var maxOccurence = 0;
//     let maxElement = arr[0];

//     for(let element in arr)
//         if(getMaxOccurence(arr,element) > maxOccurence) {
//             maxOccurence = getMaxOccurence(arr,element);
//             maxElement = element;
//         }

//     console.log(" "+ maxElement + " ( " + maxOccurence + " times)");
// }

let getOccurence = (arr, element) => {

    let output = 0;

    for(let i = 0; i < arr.length; i++)
        if(arr[i] === element)
            output++;

    return output;
}

const getMaxOccurence = (arr) => {
    
    arr.sort();

    let maxOccurence = 0, maxElement = arr[0];

    arr.forEach((item,index) => {

        let currentItemOccurence = getOccurence(arr, item);
        if(currentItemOccurence > maxOccurence) {

            maxOccurence = currentItemOccurence;
            maxElement = item;
        }
    });

    console.log(" "+ maxElement + " ( " + maxOccurence + " times)");
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(getMaxOccurence(arr1));

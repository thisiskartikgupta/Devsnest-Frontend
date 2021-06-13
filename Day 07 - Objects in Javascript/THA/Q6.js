
const sortListOfObjectsByKey = (listOfObj, key) => {

        listOfObj.sort( (a,b) => a[key] < b[key] ? -1 : 1 );
};

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

sortListOfObjectsByKey(library, "title");
console.log(library);

sortListOfObjectsByKey(library, "author");
console.log(library);

sortListOfObjectsByKey(library, "libraryID");
console.log(library);
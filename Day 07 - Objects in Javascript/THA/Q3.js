
const getObjectLength = student => {

    let size = 0;
    for(let key in student)
        size++;

    return size;
}

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(getObjectLength(student));


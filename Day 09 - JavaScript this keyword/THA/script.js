console.log("script.js is ONLINE🟢");

// var firstName = "Kartik"
// var lastName = "Gupta"

let object1 = {
    firstName : "Shinra",
    lastName : "Tensei",
    user : "Pain",
    fullNameArrow1 : () => {  
        console.log(this);
        console.log(this.firstName + " " + this.lastName)
    },
    fullNameFunction1 : function() {  
        console.log(this);
        console.log(this.firstName + " " + this.lastName)
    }, 
    getThis: () => { console.log(this)}
};

let object2 = {
    firstName : "Ryoiki",
    lastName : "Tenkai",
    generalUser : "Jujutsu Socerers",
    fullNameArrow2 : () => {
        console.log(this.firstName + " " + this.lastName)
    },
    fullNameFunction2 : function() { 
        console.log(this);
        return (this.firstName + " " + this.lastName)
    }, 
};

// console.log(object1);
// console.log(object2);

//? The below line shows how keys in a object are equivalent to variables. There is a clear cut analogy between the same what varies is their scope
// object2.fullNameArrow2();

var bindedFunction = () => {
    console.log(object2.fullNameFunction2());
}

// object2.fullNameFunction2().bind(object1);
// object2.fullNameFunction2().call(object1);
// object2.fullNameFunction2().apply(object1);

// object2.fullNameArrow2().bind(object1);
// object2.fullNameArrow2().call(object1);
// object2.fullNameArrow2().apply(object1);

// object1.fullNameFunction1().bind(object2);
// object1.fullNameFunction1().call(object2);
// object1.fullNameFunction1().apply(object2);

// object1.fullNameArrow1().bind(object2);
// object1.fullNameArrow1().call(object2);
// object1.fullNameArrow1().apply(object2);
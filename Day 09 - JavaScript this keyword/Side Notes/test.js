//? window is generated after whole JS is parsed. So it does not have any changes when logged

// console.log(window);
// var a = 10; // this will show up in the window
// var _a = 2230; // this wont show up as its JS way of pvt. But console.log is allowed
// console.log(window); 

// console.log(window.a);
// console.log(window._a);

// console.log(this); // show up window as the reference of this is window.


//? Creating new windows from console and from there we can set its url and modify its source.
//? So this would become a very serious security flaw as one tab can access manipulate data on other
//? JS comes with cross-origin support and raises a DOMException when it finds an intrusion.

// var testWindow = window.open();
// testWindow.close()

//? Using this to access globa

// Try Below block of code one by one.

// // ==============Below Example - Const declared variables arent hoisted. ===================
// // Code DOES NOT WORK
// var button = document.getElementById("bt1");
// button.addEventListener("click", aclicked);

// const aclicked = () => {
//     console.log("hello");
// }

// const avar_greeting = "Hello";

// // ==========================Below Example - var declared variables are hoisted but are not initialized=========
// // Code DOES NOT WORK
// var button = document.getElementById("bt1");
// button.addEventListener("click", bclicked);

// const bclicked = () => {
//     console.log(bvar_greeting);
// }

// const bvar_greeting = "Hello";


// // ==========================Below Example - Function hoisting (not arrow function) works ====================
// // Code WORKs
// var button = document.getElementById("bt1");
// button.addEventListener("click", cclicked);

// const cvar_greeting = "Hello";

// function cclicked() {
//     console.log(cvar_greeting);}

// ==========================Below Example - variable hoisting : only declarations are hoisted not Initialization  ====================
// Code WORKs - SURPRISINGLY - Because the function dclicked is executed only when the button is clicked. By that thime dvar_greeting is initialized.
var button = document.getElementById("bt1");
button.addEventListener("click", dclicked);



function dclicked() {
    console.log(dvar_greeting);
};


var dvar_greeting = "Hello";

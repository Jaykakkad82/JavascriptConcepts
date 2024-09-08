// ===> Q1 : What is function declaration, function expression and arrow function
//function declaration

function myAdd(a,b){
    
    console.log("1. ADD",a*b);
};

// function expression
const myAdd2= function(a,b){
    console.log("2. Add : ",a*b);};


// arrow function
const myAdd3 = (a,b) => console.log("3.ADD ",a*b) ;

var i = 2;
var j = 3;

var a = myAdd(i,j);
var b = myAdd2(i,j);
var c = myAdd3(i,j)

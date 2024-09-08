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


// ========> Q2: First CLass Functions
// functions can be assigned to variables and passed as arguments to other functions.

function processNumbers(a){
    return a*a;
}

function ExampleFirstClass(a,b,fn){
console.log("Example of First Class Functions");
console.log(fn(a));
console.log(fn(b));
}

ExampleFirstClass(2,3,processNumbers);   // note we are passing function as argument

// ======= Q3: Find OUTPUT (IIFE: Immediately Invoked Function Expression)
(function aNewAdd(a,b){
    console.log("Output Example Q3",a+b);})(2,3);



// =========== Q4: Closure : Ability of functions to access variables that are lexically outside of their scope.

function closureExample(initialValue){
    return function increment(){initialValue+=1;return initialValue;}
}

console.log("Q4: Output for Closure Example")
var a = closureExample(10);
console.log(a());
console.log(a());
console.log(a());
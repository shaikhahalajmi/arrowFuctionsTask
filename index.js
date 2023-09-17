// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

// function greet(name) {
//     return `Hello, ${name}!`;
//   }

//   console.log(greet("shaikhah"));
const greet = (name) => `Hello, ${name}!`;

console.log(greet("shaikhah"));


// Q2) Write a simple arrow function that takes two parameters and returns their sum.
// function sum(x,y){
//     return x+y;

// }//end
// console.log(sum(1,2));

const sum =(x,y) => x+y;

console.log(sum(1,2));


// Q3) Write a simple arrow function that squares a number.

const square = (x) => x*x;

console.log(square(2));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
 const arraySquared =(a) =>{
    let b =[];
    for (let i = 0; i < a.length; i++) {
        b[i] = a[i]* a[i];
        
    }
    return b;
 }

 console.log(arraySquared([2,3,4]));

 //or 

 const aSquared =(a) =>{
    let b =[];
    for (let i = 0; i < a.length; i++) {
            b.push( a[i]* a[i]);
        
    }
    return b;
 }

 console.log(aSquared([2,3,4]));



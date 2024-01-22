// division based on data stored in memory and data accessing
// ***** primitive datatypes - 7 ***** //
// String, Number, Boolean, Null(empty--ekdum khali), Undefined, Symbol(to make value unique), BigInt.


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


// these declared values are different
//symbol is used for unique.
const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 212123454678985n

console.log(id === anotherId);
// JavaScript is a dynamically typed language.

// Reference Type (Non-Primitive)
// Arrays, Objects, Functions 

const heros = ["shaktiman", "nagraj", "doga"];
// every value in curly braces is Object.
let myObj = {
    name: "yogesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
} 

console.log(typeof anotherId);

//                          return type
// bigint                   bigint
// symbol                   symbol
// array                    object
// object                   object
// function                 object function
// 100.3                    number
// undefined                undefined

// we assume string(with something in it) has truthy values 
const userEmail = "y@gmail.com"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// empty value ko apneaap falsy assume kr lia
const userEmale = ""

if(userEmale){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// empty array ko true dega
const userEmal = []

if(userEmal){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values

// false, 0, -0, bigInt 0n, "", null, undefined, NaN. all other than this are truthy values.

// eg of truthy values 
// anything in "" is truthy values chahe vo space hi ho.
// "0", 'false'," ", [], {}, function() {}. 

if(userEmal.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}


// the Object.keys(emptyObj) => converts the object to array and applying the function .length will help us know about the length of it.
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("More than 80");;
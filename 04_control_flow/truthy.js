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

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
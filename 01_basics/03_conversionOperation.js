// under we discussed all DTypes - outputs
let score = "yogesh" // true // undefined // null // "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //conversion of string to number

console.log(typeof valueInNumber)
console.log(valueInNumber)

// the 33abc which is converted by Number(score)
// to number datatype is Not-A-Number(NaN)
// so always check dont rely.

// "33" => 33
// "33abc" => NaN
// true => 1

let isLoggedIn = "yogesh" // "" // 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
//"" => false
// "yogesh" => true

let someNumber = 15
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
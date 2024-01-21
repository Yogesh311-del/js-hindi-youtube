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


// ************* Operations ************** //

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2*2)
// console.log(2-2)
// console.log(2+2)
// console.log(2**3) --> 2 power 3 
// console.log(2/2)


let str1 = "hello"
let str2 = " yogesh"

let str3 = str1 + str2
console.log(str3)

// ------- bit complex ----------
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); -->string ko dekh le if string pehle hai to it will be 122
// console.log(1 + 2 + "2"); --> if like this ki string baad mein hai to pehle addition ho jaega 32


// not much needed
console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);


// ----**** important ****---- //
let x = 3
const y = x++ // aur x++
console.log(x);
console.log(y);

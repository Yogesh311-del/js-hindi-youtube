// array uses shallow copy
// js arrays are resizeable and can contain mix of different datatypes.
// shallow copy and deep copy 
// shallow shares same refernce point mtlb jo bhi change karunga original array mein bhi change hoga
// deep mein it dont share same refernce point therefore 
// dont refer to original array it refers to copy of the array 
// declaration of arrays different forms. (3 forms to declare)
const myArr = [0, 1, 2, 3, 4, 5, true, "yogesh"]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[7]);

// Array methods

myArr.push(6)
myArr.push(7)
// console.log(myArr);
myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


// join converts the array to string that is values will be same datatype changes
// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A " ,myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// slice dont change the original array while splice remove the elements from array and changes the array.
// slice dont include range while splice does include.


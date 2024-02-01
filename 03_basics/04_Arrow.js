// *this keyword refers to current context.
const user = {
    username: "yogesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // *this ki value in node is empty object.

// while output of *this in browser is window.


// *this is undefined in a function.
// function chai() {
//     let username = "yogesh"
//     console.log(this.username);
// }

// chai();


// same with it also -- *this is undefined
// const chai = function() {
//     let username = "yogesh"
//     console.log(this.username);
// }

// chai()


// --------arrow function---------- // 
const chai = () => {
    let username = "yogesh"
    console.log(this);
}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));

// chai();

// curly{} braces use hua to hume return keyword likhna padega

// agar parenthesis() use kia to no need to write return -- this is *implicit 
const addOne = (num1, num2) => (num1 + num2);
console.log(addOne(3, 8));

// if we have to return object then wrap object that is {} into parenthesis.
const add = () => ({username: "yogesh"});
console.log(add()) // return object



const myArray = [2,5,3,6,7,8]
// myArray.forEach(() => {})

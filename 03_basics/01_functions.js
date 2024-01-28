function sayMyName(){
// console.log("Y");
// console.log("O");
// console.log("G");
// console.log("E");
// console.log("S");
// console.log("H");
}


// function ka refrence dena
// sayMyName

// function ka execution
sayMyName()

/*
// jab fucntion ki definition banate hai tab jo 
// input lete hai vo **parameters hote hai. 
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
*/

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}
// aur jab function call krte tab value jo pass karte hai that is **arguments.
const result = addTwoNumbers(3, 5)
// const result and let result --> dono alag hai. cause unka scope{} alag hai.
console.log("Result: ", result);

// jab return karenge tab hi variable mein store kr skte hai khali console log krne se nahi hoga.

function loginUserMessage(username = "ram"){
    // if(username === undefined){
        if(!username){ 
        console.log("Please enter a username");
        // neeche jo return likha hai agar if scope mein aa gae to just logged in wala will never execute.
        return;
    }
    // ${} ke saath variables ke naam likh skte. 
    return `${username} just logged in`
}

console.log(loginUserMessage());
// console.log(loginUserMessage("Yogi"));



















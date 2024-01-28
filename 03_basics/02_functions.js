// when we dont know how many argument will come from user.
// ...variable --> Spread operator/ rest operator to store as many input as needed.
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))


// usecase of Object ----------- 
const user = {
    username: "yogesh",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// direct object bhi pass kr skte.
handleObject({
    username: "sam",
    price: 566
})

// Array

const myArr = [200, 500, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
// or we can pass like this also::
console.log(returnSecondValue([500,800,600,4100]));

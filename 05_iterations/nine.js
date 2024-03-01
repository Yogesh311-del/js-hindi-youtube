//reduce is used in shopping.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)



// same value hi dega likhne ka tarika acha hai and short because we havent used {} therefore no need to use "return" ans all done in one line.
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


// objects in array.
const shopppingCart = [
    {
        itemName: "js course",
        price: 2999 
    },
    {
        itemName: "c++ course",
        price: 1999 
    },
    {
        itemName: "py course",
        price: 5999 
    },
    {
        itemName: "data science course",
        price: 2999 
    },

]
 
const priceToPay = shopppingCart.reduce((acc, item) => acc +  item.price, 0)

console.log(priceToPay);



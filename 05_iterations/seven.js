const myIntegers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const myNew = myIntegers.map( (num) => {
   return num + 10 
}               
)                         

console.log(myNew);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40) // now applied filter therefor jo greater hoga vo hi paas hoga. 

console.log(newNums); // result will be 41, 51, 61, 71, 81.


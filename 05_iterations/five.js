const coding = ["js", "ruby", "java", "python", "cpp"]

// "for of" - way
for (const str of coding) {
    // console.log(str);
}

// "for each" - way(normal function)
coding.forEach( function (language) {
    // console.log(language);
} )

// arrow function
coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    console.log(item);
}
// printMe() -> this is calling of a function
// printMe -> while this is giving reference of a function.

// giving reference of printMe to coding array.
coding.forEach(printMe)
// printMe();


// iss forEach  ke pass item index arr(puure) teeno ka access hota hai
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} ) 

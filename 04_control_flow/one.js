// if
// const isUserloggedIn = true
// const temp = 41

// if( temp === 50 ){
//     console.log("less than 50");
// }
// else{
//     console.log("temp is greater");
// }
// if (2 == "2"){
//     console.log("executed");  // will be printed
// }
// if (2 === "2"){
//     console.log("executed");  // will not be printed
// }



//  "=" => assignment operator
// <, >, <=, >=, ==(for checking), !=, ===(checks types also)

// const balance = 1000
// implicit scope -- no need of { }
// if(balance > 500) console.log("test"),
// console.log("test1"); //not recommended

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2==2 || 2==3) {
    console.log("Allow to buy course");
}



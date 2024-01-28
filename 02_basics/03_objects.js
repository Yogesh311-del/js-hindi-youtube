// objects in js are declared in two ways as literal and constructor
// Singleton -- when we declare using constructor 
// a singleton object is made in literal its not made.


/* singleton
 Object.create => this is by constructor */

// object literals

// decalration of symbol and accessing it as a key.
// remember [] while declaring and accesing.
const mySym = Symbol("key1")

const jsUser = {
    name: "Yogesh",
    class: 9,
    "full name": "himanshu",
    [mySym]: "mykey1",
    age: 22,
    location: "Bikaner",
    email: "yogesh@gmail.com",
    isLoggedIn: false,  
}

/*
console.log(jsUser.email);
console.log(jsUser.name, jsUser.class)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
*/
// array ko only index se hi access kr skte but in case of object we can access using key and values.

jsUser.email = "yogiraj@gmail.com"
// top freeze the further modification to objct we freeze the object
// Object.freeze(jsUser)
// email wont be changed now
jsUser.email = "yogesh@where.in";
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello js User");
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
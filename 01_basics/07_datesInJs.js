// Dates
// date is a object in Js.

let myDate = new Date()
// different formats mein date laane ka tareeka
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// months starts from 0 in Js
// eg. 0 for January.
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

// for like I have to decide the winner or
// have to see who booked the hotel room first
// so I will look at date and Time
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// for calculating in second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// as month starts from 0 therefore added 1.
console.log(newDate.getMonth() + 1);
// gives the day of week
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "narrow"
})

console.log(newDate);
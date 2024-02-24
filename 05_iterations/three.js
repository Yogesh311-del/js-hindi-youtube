// for of --> used in Arrays, Strings, Map for iterations.
// for in --> used in Object for iterations. 

// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = ["yog", "mod", "lobh"]

for (const greet of greetings) {
    // console.log(greet);    
}

const meetings = "yog aur code!"
let num = 1; // cant use const here as it is to be updated every time!
for (const meet of meetings) {
    // console.log(`char number is : ${num} ${meet}`);
    num++;
}

// ------------ Maps ------------

// objects doesnt care about order stored, Maps do.
// stores only unique key-value pair.
const map = new Map()
// to set values in map
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
// map.set('IN', "America") // now key IN is udpated to America

// console.log(map); 

// syntax :- const [key, value] of map
// now this is destructuring of array to "key and values".
for (const [code, country] of map){
    console.log(code , ':-' , country);
}

// --------------- About Object -------------- //
const myObject = {
    'game1': 'NFS',
    'game2': 'COD',
    'game3': 'Spiderman'
}


for(const [key, value] of myObject) {
    console.log(key); // we cant iterate objects by this way.
    // refer to four.js
}
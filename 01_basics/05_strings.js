let name = "yogesh"
let regname = " 89"

// give output
console.log(name + regname + " value");

// another way of taking output
console.log(`hello this is ${name} and my regname is ${regname}`);

// lets us access value pair and this is also a way of declaring string
const gameName = new String('yogeshhh')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));
console.log(gameName.substring(0, 3));

//last value wont be included
const newString = gameName.substring(0, 4);
console.log(newString)

// takes char values from back -- error
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const anoString = "   yogesh"
console.log(anoString);
//remove extra spaces
console.log(anoString.trim());

const url = "https://yogesh.com%20jfpt"
// when there is space in-between in a url then it automatically gets replaced by %20 thefore to replace it to desired we do following
console.log(url.replace('%20', '-'))

// tells ki inckude karta ki nahi url mein yogesh
console.log(url.includes('yogesh'))

// *string* to *array* conversion based on - or space
const myName = new String('yog-es-hhh')
console.log(myName.split('-'));
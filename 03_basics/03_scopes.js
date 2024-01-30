// {} --> scopes
// if ke andar jo likha hai that is *block scope
// bahar jo declare karte hai(values) that is global scope.
let a = 500; // global scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    var c = 30 // there is problem with var(scope problem)
}

// console.log(a); 
// console.log(b); 
// console.log(c); --> will print values- out of scope also.

// just remember - global scope for node and for browser are different.


function one(){
    const username = "yogesh"

    function two(){
        const website = "youtube"
        // our function can access the variables declared outside --> like username --> this property is closure(child function can access parent variables).
        console.log(username);
    }
    // console.log(website);
    two()
}

// call karte hai to execute hota hai
// one()

if(true){
    const username = "yogesh"
    if(username === "yogesh"){
        const website = " learnings"
        // console.log(username + website);
    }
    // console.log(website); --> gives error 
}

// console.log(username); --> gives error

// +++++++++ interesting Topic:: *Hoisting* ++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5) // --> gives error(used before declaration as stored in varible gives error)
const addTwo = function(num){
    return num + 2
}






// Immediately Invoked Function Expressions (IIFE)
// two main roles(IIFE): To remove global scope pollution(like global scope declarations) and execute functions immediately.
// when you write two or more iife in function then use ; after one ends. 
var data = "yogesh"
// aam zindagi
function yog() {
    console.log(`Dn connected`);
}

// yog()

// iife zindagi 
()()
(function yod() {
    // named iife
    console.log('DB Connected 1');
}) (); // to agar do iife ek code mein hai to use ; after onw ends

// therefore two parenthesis ki baat hai --> ()()
// (isme likhnge function ki definition)(aur isse call krenge simply blank)

( () => {
    // simple iife
    console.log(`DB Connected 2`);
}) ();

// yod and aurcode function are same but why not working -- because this doesnt know where to stop context therfore we have to stop by using ;.

// just eg for learning -- paramter pass in function
( (name) => {
    console.log(`DB Connected by ${name}`);
})('Yogesh')

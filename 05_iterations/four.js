// Learning For In
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "seift by apple"
}
// for in
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}


// "for in" loop on arrays.
const arr = [1, 2, 8, 4, 5]

for(const num in arr){
    console.log(arr[num]);
}
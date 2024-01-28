// singleton
/*
const fbUser = new Object()
console.log(fbUser); 
*/ 

// non singleton or literal
const fbUser = {}

fbUser.id = "123maddy"
fbUser.name = "maddxx"
fbUser.isLoggedIn = false

// console.log(fbUser);

//object mein object
const regularUser = {
    email: "yogesh$gmail.com",
    fullname: {
        userfullname: {
            firstname: "yogesh",
            lastname: "kachhawa"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// we used the {} in object assign so that all the obj 
// console.log(obj4 === obj1);

// spread
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "yogesh@gmail.com",
    },
    {
        id: 1,
        email: "yogesh@gmail.com",
    },
    {
        id: 1,
        email: "yogesh@gmail.com",
    },
    {
        id: 1,
        email: "yogesh@gmail.com",
    },
]
/*
console.log(users[1].email);
console.log(Object.keys(fbUser)); 
console.log(Object.values(fbUser));
*/
// key value pair
// console.log(Object.entries(fbUser)); 

// To check fbUser has some required property or not
// console.log(fbUser.hasOwnProperty('isLogged'));


// Object De-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrutor: "yogesh"
}

// under destructuring is shown.
// destructure syntax :: const {} = course
const {courseInstrutor} = course
const {coursename} = course

// console.log(courseInstrutor);
console.log(coursename);

// json -- it is basically an object only.
// object is always sent in json format.
// in json object keys and values both are string.

// {
//     "name": "yogesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]



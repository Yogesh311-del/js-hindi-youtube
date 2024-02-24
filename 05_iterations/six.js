const myNums = [1, 2, 3, 4, 5, 6]

// using "filter"
const newNums = myNums.filter( (num) => num > 3)

// console.log(newNums);

const oddNums = myNums.filter( (num) => {
   return num > 4; // when we start scope ie {} than use of "return" is mandatory.
} )

// console.log(oddNums);


// using "for-each" loop
const newBums = []

myNums.forEach( (num) => {
    if(num > 1) {
        newBums.push(num)
    }
})

// console.log(newBums);



const books = [
        {
          title: "Unlocking Android",
          categories: "Java",
          publish: 1998,
        },
        {
          title: "Android in Action, Second Edition",
          categories: "Java",
          publish: 1995,
        },
        {
          title: "Specification by Example",
          categories: "Software Engineering",
          publish: 1990,
        },
        {
          title: "Flex 3 in Action",
          categories: "Internet",
          publish: 2000,
        },
        {
          title: "Flex 4 in Action",
          categories: "Internet",
          publish: 1992,
        },
        {
          title: "Collective Intelligence in Action",
          categories: "Internet",
          publish: 1996,
        },
        {
          title: "Zend Framework in Action",
          categories: "Web Development",
          publish: 2005,
        },
        {
          title: "Flex on Java",
          categories: "Internet",
          publish: 1998,
        },
        {
          title: "Griffon in Action",
          categories: "Java",
          publish: 2015,
        },
        {
          title: "OSGi in Depth",
          categories: "Java",
          publish: 2003,
        },
        {
          title: "Flexible Rails",
          categories: "Web Development",
          publish: 2001,
        },
]


// normal function
// bk is object
let userBooks = books.filter( (bk) => bk.categories === 'Java')

// used scope 
userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.categories === 'Java'
})

console.log(userBooks);
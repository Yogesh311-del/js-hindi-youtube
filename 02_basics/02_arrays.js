const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// wrong way to concat 
// marvel_heros.push(dc_heros)

// wrong way to concat 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// right way to concatinate 
// we have to declare them in new array to get the concatinatied of all heros
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// another way -- spread -- glass ko spread by dropping therefore each element is separted.(mutliple values concat by ... karo maja karo)
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 6]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Yogesh"))
console.log(Array.from("Yogesh"))
// interesting -- isko batana padega ki keys ka array banana hai ki values ka if not given it will return empty array.
console.log(Array.from({name: "yogesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// Arrays
// arrays are mutable
// Array is a collection of items which is more suitable for larger collection of values and more preferable as compare of other methods array is a linear method
// array can store string and numbers but its more preferable to only store one type of value

let marks = [99, 89, 69, 62, 43, 23]; // array shows length index/position and the value
marks[5] = 33;
console.log(marks); // typeof is object
console.log(marks.length); // (property)6 only prints length

// Array Indices (Index)
console.log(marks[6]); // undefined
console.log(marks[5]); // 33

// Loop over Array
// Loop - iterable (strings, objects, arrays)
let hero = ["Superman", "Ironman", "Antman", "Hulk", "Thor", "Spiderman"];
console.log(hero[0]); // Superman
console.log(hero[2]); // Antman
let heroes = ["Superman", "Ironman", "Antman", "Hulk", "Thor", "Spiderman"];
for (let idx = 0; idx < heroes.length; idx++) {
  console.log(heroes[idx]); // can replace idx with i
}
/*
Superman  
Ironman
Antman
Hulk
Thor
Spiderman 
*/
// let heroes = ["Superman", "Ironman", "Antman", "Hulk", "Thor", "Spiderman"];
// for (let idx = 1; idx <= heroes.length; idx++) {
//   console.log(heroes[idx - 1]); not a standard way of doing loop over array

// for of
for (let el of heroes) {
  console.log(el);
}

let mark = [85, 97, 69, 75, 33, 50];
let sum = 0;

for (let i of mark) {
  sum += i;
}
let avg = sum / mark.length;
console.log(sum);
console.log(`Average Marks of the class = ${avg}`);

// Arrays Method

let heroes1 = ["Superman", "Ironman", "Antman", "Hulk", "Thor"];
heroes1.push("Spiderman", "X-men", "Deadpool"); // always adds at the end & makes changes inside the existing array
let deleted = heroes1.pop(); // also makes changes inside the existing array from the end
console.log(heroes1);
console.log("deleted names", deleted);
console.log(heroes1);
console.log(heroes1.toString()); // doesn't change the original array

let marvel_heroes = ["Thor", "Hulk", "Ironman"];
let dc_heroes = ["Batman", "Superman", "Aquaman"];

let hero1 = marvel_heroes + dc_heroes;
let hero2 = marvel_heroes.concat(dc_heroes);
console.log(hero1); // converts to string and adds on
console.log(hero2); // keeps as array and adds on

// Unshift Method
let val = marvel_heroes.unshift("Loki"); // adds from the start
console.log(marvel_heroes);
let val1 = marvel_heroes.shift(); // subtracts from the start
console.log(marvel_heroes);
console.log("Deleted name", val1);
// Slice
console.log(hero2.slice(1, 3)); //['Hulk', 'Ironman']
console.log(hero2.slice(1)); //  ['Hulk', 'Ironman', 'Batman', 'Superman', 'Aquaman']
console.log(hero2.slice()); // ['Thor', 'Hulk', 'Ironman', 'Batman', 'Superman', 'Aquaman'] can be used to copy original array
// Splice

let numbers = [0, 1, 2, 3, 4, 5, 6];

console.log(numbers.splice(2, 2)); // 2,3
let i = numbers.splice(6, 0, 7, 8); // adds from the index position mentioned
console.log(numbers);

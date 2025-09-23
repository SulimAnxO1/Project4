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

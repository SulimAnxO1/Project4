// Function
// Useful for reducing redundancy

function myFunction() {
  console.log("I am Sulaiman Sufian");
  console.log("Nice to meet you");
} // wont print any thing cause function is not called/invoked
myFunction(); // if need to print the same thing again just call function to print it x times

function myFunction1(msg) {
  // parameter -> input
  console.log(msg);
}
myFunction1("Hello"); // argument

function myFunction1(msg, n) {
  console.log(msg * n);
}
myFunction1("Hello", 69); // NaN (Not a Number)

function sum(x, y) {
  console.log(x + y);
}
sum(1, 2);
sum(69, 1000);

function sum(x, y) {
  // local variables -> block scope
  s = x + y;
  console.log("before return");
  console.log(x);
  return s; // cant execute code after return
}
let i = sum(2, 5);
console.log(i);
// console.log(x);  undefined

// sum function
function sum(a, b) {
  return a + b;
}
//multiplication function
function multi(a, b) {
  return a * b;
}

// Arrow Function(=>)
// Arrow Sum
const arrowSum = (a, b) => {
  console.log(a + b);
};
console.log(arrowSum); //(a, b) => { console.log(a + b);} | stores function definition
console.log(arrowSum(2, 3)); // 3 and undefined cause absence return
// Arrow Multiplication
const arrowMulti = (a, b) => {
  return a * b;
};
console.log(arrowMulti); // const arrowMulti = (a, b) => {  return a * b;};
console.log(arrowMulti(1, 4)); // 4

// ForEach (loop in arrays)
// When a Function is used for an object it becomes a method

let arr = [1, 2, 3, 4, 5];
arr.forEach(function print(i) {
  // value at each idx
  console.log(i);
});

arr.forEach((i) => {
  console.log(i); // console.log (i.toUpperCase());
}); // higher order function /method

arr.forEach((i, idx) => {
  console.log(i, idx);
});

arr.forEach((i, idx, arr) => {
  console.log(i, idx, arr);
});

// Map -> it is used to create a new Array using the return value
arr.map((i) => {
  console.log(i);
});

let newArr = arr.map((i) => {
  return i * i;
});
console.log(newArr);

// filter
let evenArr = arr.filter((i) => {
  return i % 2 === 0;
});
console.log(evenArr);

// reduce
// sum
let array = [1, 2, 3, 4];
const output = array.reduce((res, curr) => {
  return res + curr;
});
console.log(output); //10

// find the largest/smallest number
let array1 = [5, 6, 2, 1, 3];
const output1 = array1.reduce((prev, curr) => {
  return prev > curr ? prev : curr; // "<" for smallest number
});
console.log(output1); // 6

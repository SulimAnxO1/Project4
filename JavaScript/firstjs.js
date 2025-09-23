console.log("Hello World");
alert("Hello");
fullName = "MX";
console.log(fullName);
let age = 22;
age = 23;
age = 24;
console.log(age);
console.log(age + 1);
const PI = 3.14;
console.log(PI);
var cgpa = 2;
var cgpa = 3;
var cgpa = 4;
{
  let a = 5;
  console.log(a);
}
{
  let a = 10;
  console.log(a);
}
let z = 3;
let name = "Papon";
let x = BigInt("123");
let y = Symbol("Hello");
isFollow = true;
let a;
let b = null;
const student = {
  fullName: "Sulaiman",
  age: 22,
  cgpa: 9,
  isPass: true,
};
student["fullName"] = "Sulaiman Sufian";
student["age"] = student["age"] + 1;
console.log(student.age);
console.log(student["cgpa"]);
"abcd" + 123;

//Used for comments in one line
/*Used for comments that goes multiple line*/

// Arithmetic Operators
let i = 5;
let j = 2;
console.log("a=", i, "b=", j);
console.log("a + b =", i + j);
console.log("a - b =", i - j);
console.log("a * b =", i * j);
console.log("a / b =", i / j);
console.log("a % b =", i % j);
console.log("a ** b =", i ** j);

// Alternative
let k = 5;
let o = 2;
let p = 7;
console.log("a + b =", p);

// Unary Operators
// Increment ++ & Decrement --
i++; //6
console.log("++a =", ++i); //7
console.log("a++ =", i++); //7
console.log("a =", i); //8
i--; //7
console.log("--a =", --i); //6
console.log("a-- =", i--); //6
console.log("a =", i); //5

// Assignment Operators

i += 4; // i = i + 4
console.log("a =", i); // 9

i -= 4; // i = i - 4
console.log("a =", i); // 5

i *= 4; // i = i * 4
console.log("a =", i); // 20

i /= 4; // i = i / 4
console.log("a =", i); // 5

i %= 4; // i = i % 4
console.log("a% =", i); // 1

i **= 4; // i = i ^ 4
console.log("a =", i); // 1

// Comparison Operators

// let a = 5
// let b = "5" -string -> number
// a == b true
// a === b false

console.log("a = b", i == j); // false
console.log("a = b", i === j); // false
console.log("a = b", i != j); // true
console.log("a = b", i !== j); // true
console.log("a = b", i >= j); // false
console.log("a = b", i <= j); // true
console.log("a = b", i > j); // false
console.log("a = b", i < j); // true

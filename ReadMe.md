# 📘 JavaScript Notes & Examples

This document contains **basic JavaScript notes** with examples.

---

## 🔔 Alerts & Console

```js
// Popup alert
alert("Hello!");

// Print a message to console
console.log("Hello World");
let age = 22;
console.log(age); // 22

age = 23; // updating value
console.log(age); // 23

const PI = 3.14; // must have value assigned
console.log(PI);

Variable Types

var → Can be re-declared & updated. Function/global scope (not recommended).

let → Cannot be re-declared, but can be updated. Block scope (recommended).

const → Cannot be re-declared or updated. Block scope, must be assigned a value.

// Block scope
{
  let a = 5;
  console.log(a); // 5
}
{
  let a = 10;
  console.log(a); // 10
}
🐪 Naming Conventions

fullName → ✅ camelCase (commonly used)

fullname → ❌ not readable

FullName → ✅ PascalCase (used for classes)

full-name → ❌ invalid in JS (kebab-case not allowed)

full_name → ✅ valid but uncommon (snake_case)

🔢 Data Types in JavaScript

Primitive Data Types

String → "MX"

Number → 1323

Boolean → true / false

Undefined → variable declared but no value

Null → null (special value, but typeof shows "object")

BigInt → 123n or BigInt("123")
let x = BigInt("123");

Symbol → Symbol("Hello")
let y = Symbol("Hello");

Non-Primitive Data Types

Objects → collections of values (arrays, functions, objects)
const student = {
  fullName: "Sulaiman",
  age: 22,
  cgpa: 9,
  isPass: true,
};
// Update object properties
student.fullName = "Sulaiman Sufian";
student.age = student.age + 1;
console.log(student.age);  // 23
console.log(student.cgpa); // 9


// Alerts & Console
alert("Hello!");
console.log("Hello World");

// Variables
let fullName = "MX";
console.log(fullName);

let age = 22;
age = 23;
age = 24;
console.log(age);

const PI = 3.14;
console.log(PI);

// Block scope demo
{
  let a = 5;
  console.log(a);
}
{
  let a = 10;
  console.log(a);
}

// BigInt & Symbol
let x = BigInt("123");
let y = Symbol("Hello");

// Object
const student = {
  fullName: "Sulaiman",
  age: 22,
  cgpa: 9,
  isPass: true,
};
student.fullName = "Sulaiman Sufian";
student.age = student.age + 1;
console.log(student.age);
console.log(student.cgpa);
// Adding 1 to age
let age = 22;
console.log(age + 1); // 23

// Printing variable
let name = "MX";
console.log(name);

```

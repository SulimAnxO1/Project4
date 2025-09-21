# 📘 JavaScript Notes & Examples

This project demonstrates the basics of **JavaScript variables, data types, and objects** with examples.

---

## 🔔 Console & Alerts

````js
console.log("Hello World"); // prints a message to console
alert("Hello");             // shows a popup alert

📝 Variables
 Example

fullName = "MX"; // key = fullName, value = "MX"
console.log(fullName);

Variable Types

let → Cannot be re-declared, but can be updated. Block scope.

const → Cannot be re-declared or updated. Must be assigned a value. Block scope.

var → Can be re-declared & updated. Function/global scope (❌ outdated, not recommended).

let age = 22;
age = 23;
age = 24;
console.log(age);    // 24
console.log(age + 1); // 25

const PI = 3.14;
console.log(PI);

var cgpa = 2;
var cgpa = 3;
var cgpa = 4;
console.log(cgpa); // 4

🧩 Block Scope

Use {} to create a block. Inside a block, let or const cannot be declared twice.

{
  let a = 5;
  console.log(a); // 5
}
{
  let a = 10;
  console.log(a); // 10
}

🔢 Data Types
Primitive Data Types
let z = 3;               // Number
let name = "Papon";      // String
let x = BigInt("123");   // BigInt → prints as 123n
let y = Symbol("Hello"); // Symbol → prints as Symbol(Hello)
isFollow = true;         // Boolean
let a;                   // Undefined
let b = null;            // Null

Notes

Number → integers & decimals.

String → text values.

BigInt → very large integers (123n).

Symbol → unique identifier (Symbol("Hello")).

Boolean → true/false.

Undefined → declared but no value.

Null → intentional empty value (typeof null returns "object", but it’s a primitive).


Non-Primitive Data Types

Objects → Collections of key-value pairs (arrays, functions are also objects).

const student = {
  fullName: "Sulaiman",
  age: 22,
  cgpa: 9,
  isPass: true,
};

// Update object values
student["fullName"] = "Sulaiman Sufian";
student["age"] = student["age"] + 1;

console.log(student.age);    // 23
console.log(student["cgpa"]); // 9


🐪 Naming Conventions

| Style       | Example     | Valid in JS? | Notes                            |
| ----------- | ----------- | ------------ | -------------------------------- |
| camelCase   | `fullName`  | ✅ Yes        | Common for variables & functions |
| PascalCase  | `FullName`  | ✅ Yes        | Used for classes/constructors    |
| snake\_case | `full_name` | ✅ Yes        | Valid but uncommon               |
| kebab-case  | `full-name` | ❌ No         | Not allowed in JS variables      |
| lowercase   | `fullname`  | ✅ Yes        | Valid but less readable          |

➕ Type Coercion

console.log("abcd" + 123); // "abcd123"
console.log("123" + 1);    // "1231"
console.log(123 + 1);      // 124


## 📊 Quick Reference: `typeof`

| Example                  | Value / Output      | `typeof` Result |
|--------------------------|---------------------|-----------------|
| `let x = 123;`           | `123`               | `"number"`      |
| `let y = "MX";`          | `"MX"`              | `"string"`      |
| `let z = true;`          | `true`              | `"boolean"`     |
| `let a;`                 | `undefined`         | `"undefined"`   |
| `let b = null;`          | `null`              | `"object"` (special case) |
| `let big = 123n;`        | `123n`              | `"bigint"`      |
| `let sym = Symbol("Hi");`| `Symbol(Hi)`        | `"symbol"`      |
| `const obj = {};`        | `{}`                | `"object"`      |
| `const arr = [];`        | `[]`                | `"object"`      |
| `function f() {}`        | `f()`               | `"function"`    |

---

### 🏃 Test in Console

```js
let x = 123;
console.log(typeof x); // "number"

let y = "MX";
console.log(typeof y); // "string"

let z = true;
console.log(typeof z); // "boolean"

let a;
console.log(typeof a); // "undefined"

let b = null;
console.log(typeof b); // "object"

let big = 123n;
console.log(typeof big); // "bigint"

let sym = Symbol("Hi");
console.log(typeof sym); // "symbol"

const obj = {};
console.log(typeof obj); // "object"

const arr = [];
console.log(typeof arr); // "object"

function f() {}
console.log(typeof f); // "function"

````

## 📝 Summary

This file covers:

- Printing messages (`console.log`) and popups (`alert`)
- Variables (`var`, `let`, `const`) and their scope
- Naming conventions (camelCase, PascalCase, snake_case, kebab-case ❌)
- Primitive and non-primitive data types
- Objects and how to update their properties
- Examples of type coercion (`"abcd" + 123`)
- `typeof` operator results for quick reference

ℹ️ Notes are also added on the side of some lines in the code for extra explanation.

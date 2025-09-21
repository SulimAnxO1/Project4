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

## 📝 Practice JavaScript – Objects & `typeof`

This project is a **JavaScript practice file** focused on working with **objects** and the **`typeof` operator**.  
It demonstrates how to create objects, access properties, and check their data types.

---

## 📦 Code Examples

### 1. Product Object

```js
const product = {
  title: "Ball Pen",
  rating: 3.45,
  offer: 50,
  price: 250,
};

console.log(product);

✅ This creates an object called product with multiple key-value pairs:

title → String

rating → Number (float)

offer → Number (integer, percentage)

price → Number

const profile = {
  username: "@suliman",
  isFollow: false,
  followers: 1000,
  following: 123,
};

✅ This defines a user profile with:

username → String

isFollow → Boolean

followers → Number

following → Number

Using typeof

console.log(typeof profile);
// 📝 Prints "object" → profile is an object

console.log(typeof profile["username"]);
// 📝 Prints "string" → username property is a string

The typeof operator is useful for checking data types in JavaScript.

Objects → "object"

Strings → "string"

Numbers → "number"

Booleans → "boolean"

🧠 Key Takeaways

Objects in JavaScript store multiple related values as key-value pairs.

The typeof operator tells you the data type of a value.

Even arrays and functions are technically objects in JavaScript.

📝 Summary

This practice covers:

Creating objects with multiple properties

Printing objects to the console

Checking types of objects and their properties using typeof

ℹ️ Notes are added alongside line 16 & 17 in parctice.js for clarity.
```

## ⚡ JavaScript Operators Practice

This project contains **JavaScript practice examples** for:

- Arithmetic Operators
- Unary Operators
- Assignment Operators
- Comparison Operators
- Using `typeof` to check data types

Notes are added inline with some lines of code for clarity.

---

## 📘 Topics Covered

### 1. Comments

```js
// Used for single-line comments
/* Used for multi-line comments */
```

Arithmetic Operators

let i = 5;
let j = 2;

console.log("a=", i, "b=", j);
console.log("a + b =", i + j); // Addition
console.log("a - b =", i - j); // Subtraction
console.log("a _b =", i_ j); // Multiplication
console.log("a / b =", i / j); // Division
console.log("a % b =", i % j); // Modulus
console.log("a **b =", i** j); // Exponentiation

📝 Note:

"a + b" (with quotes) → prints the text literally.

(a + b) → prints the sum.

("a + b =", a + b) → prints both text and result.

Unary Operators (Increment & Decrement)

i++; // same as i = i + 1
console.log("++i =", ++i); // Pre-increment
console.log("i++ =", i++); // Post-increment
console.log("i =", i);

i--; // same as i = i - 1
console.log("--i =", --i); // Pre-decrement
console.log("i-- =", i--); // Post-decrement
console.log("i =", i);

📝 Note:

++i → increments first, then prints.

i++ → prints first, then increments.

Similarly for --i vs i--.

Assignment Operators'

i += 4; // i = i + 4
i -= 4; // i = i - 4
i _= 4; // i = i_ 4
i /= 4; // i = i / 4
i %= 4; // i = i % 4
i **= 4; // i = i** 4

Comparison Operators

let a = 5;
let b = "5"; // string

console.log(a == b); // true → values are equal (type conversion happens)
console.log(a === b); // false → checks value + type (strict equality)
console.log(a != b); // false → values are same
console.log(a !== b); // true → value same but type different

console.log(a >= b); // true
console.log(a <= b); // true
console.log(a > b); // false
console.log(a < b); // false

📝 Note:

== allows type conversion (string "5" → number 5).

=== does not allow conversion → strict comparison.

🧠 Key Takeaways

JavaScript operators simplify arithmetic, assignment, and comparisons.

Increment (++) and decrement (--) operators have pre and post behaviors.

== vs ===:

== → checks only value (loose equality).

=== → checks value and type (strict equality).

📊 Quick Reference Tables

Arithmetic Operators

| Operator | Meaning             | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `5 + 2`  | `7`    |
| `-`      | Subtraction         | `5 - 2`  | `3`    |
| `*`      | Multiplication      | `5 * 2`  | `10`   |
| `/`      | Division            | `5 / 2`  | `2.5`  |
| `%`      | Modulus (remainder) | `5 % 2`  | `1`    |
| `**`     | Exponentiation      | `5 ** 2` | `25`   |

Increment & Decrement

| Operator | Description    | Example    | Result                 |
| -------- | -------------- | ---------- | ---------------------- |
| `++i`    | Pre-increment  | `i=5; ++i` | `6`                    |
| `i++`    | Post-increment | `i=5; i++` | prints `5`, then `i=6` |
| `--i`    | Pre-decrement  | `i=5; --i` | `4`                    |
| `i--`    | Post-decrement | `i=5; i--` | prints `5`, then `i=4` |

Assignment Operators

| Operator | Equivalent   | Example      | Result |
| -------- | ------------ | ------------ | ------ |
| `+=`     | `a = a + b`  | `a=5; a+=2`  | `7`    |
| `-=`     | `a = a - b`  | `a=5; a-=2`  | `3`    |
| `*=`     | `a = a * b`  | `a=5; a*=2`  | `10`   |
| `/=`     | `a = a / b`  | `a=5; a/=2`  | `2.5`  |
| `%=`     | `a = a % b`  | `a=5; a%=2`  | `1`    |
| `**=`    | `a = a ** b` | `a=5; a**=2` | `25`   |

Comparison Operators

| Operator | Description        | Example     | Result  |
| -------- | ------------------ | ----------- | ------- |
| `==`     | Equal (loose)      | `5 == "5"`  | `true`  |
| `===`    | Equal (strict)     | `5 === "5"` | `false` |
| `!=`     | Not equal (loose)  | `5 != "5"`  | `false` |
| `!==`    | Not equal (strict) | `5 !== "5"` | `true`  |
| `>`      | Greater than       | `5 > 2`     | `true`  |
| `<`      | Less than          | `5 < 2`     | `false` |
| `>=`     | Greater or equal   | `5 >= 5`    | `true`  |
| `<=`     | Less or equal      | `5 <= 2`    | `false` |

# 📘 JavaScript Notes & Examples

This project demonstrates the basics of **JavaScript programming**, including :

- Variables (`var`, `let`, `const`)
- Data Types (Primitive & Non-Primitive)
- Objects
- Operators (Arithmetic, Assignment, Unary, Comparison, Logical)
- Conditional Statements (`if`, `else`, `else if`, `switch`)
- Ternary Operator
- Practice tasks with user input (`prompt`)
- Inline notes using **CodeTour** in VS Code

It is designed for learning and practicing JavaScript fundamentals with detailed explanations and notes.

## 🗂 Files Overview

| File Name        | Description                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `index.html`     | Connects to `firstjs.js`, contains basic examples of variables, data types, and operators.                              |
| `firstjs.js`     | Demonstrates **console.log, alert, variables, data types, arithmetic, and assignment operators**.                       |
| `logicalop.html` | Connects to `logicalop.js`, covers **logical operators, conditional statements, ternary operators, switch statements**. |
| `logicalop.js`   | Implements **logical operations, if/else, else if, ternary, and switch** with examples.                                 |
| `practice.html`  | Connects to `practice.js`, focuses on **objects, typeof operator, user input with prompt**.                             |
| `practice.js`    | Practice exercises with **objects, conditional logic, and type checking**.                                              |
| `.codetour`      | Contains inline **notes for VS Code CodeTour extension**.                                                               |

1️⃣ 🔔 Console, Alerts & Prompt

```js
// Print message to console
console.log("Hello World");

// Show a popup alert
alert("Hello");

// Get input from user
let name = prompt("Enter your name");
console.log(name); // prints user input or null if canceled


💡 Notes:

console.log() → for debugging, testing, or showing output.
alert() → blocks code execution until dismissed.
prompt() → receives user input as a string.

✅ Key Takeaways:

console.log is safest for testing.
Avoid excessive alerts; they are intrusive.
Use prompt() for interactive exercises.


2️⃣ Variables & Scope

fullName = "MX"; // key = fullName, value = "MX"
console.log(fullName);
Here fullName is a variable with key = fullName and value = "MX".

🔹 Variable Types

| Type    | Description                                                         | Example                   |
| ------- | ------------------------------------------------------------------- | ------------------------- |
| `let`   | Cannot be re-declared, can be updated, block-scoped                 | `let age = 22; age = 24;` |
| `const` | Cannot be re-declared or updated, must be initialized, block-scoped | `const PI = 3.14;`        |
| `var`   | Can be re-declared and updated, function/global scope, outdated     | `var cgpa = 4;`           |
```

```js

let → Cannot be re-declared, but can be updated. Block scope.

let age = 22;
age = 23;
age = 24;
console.log(age);    // 24
console.log(age + 1); // 25


const → Cannot be re-declared or updated. Must be assigned a value. Block scope.

const PI = 3.14;
console.log(PI);


var → Can be re-declared & updated. Function/global scope (❌ outdated, not recommended).

var cgpa = 2;
var cgpa = 3;
var cgpa = 4;
console.log(cgpa); // 4


🔹 🧩 Block Scope

Use {} to define a block.
let and const are block-scoped (cannot redeclare inside the same block).

{
  let a = 5;
  console.log(a); // 5
}

{
  let a = 10;
  console.log(a); // 10
}

✅ Key Takeaways:

Variables declared with let and const exist only inside their block.
Avoid var in modern JS; it can create confusion due to global scope.

🔹🐪 Naming Conventions

| Style       | Example    | Valid in JS? | Notes                            |
| ----------- | ---------- | ------------ | -------------------------------- |
| camelCase   | fullName   | ✅ Yes        | Common for variables & functions |
| PascalCase  | FullName   | ✅ Yes        | Used for classes or constructors |
| snake\_case | full\_name | ✅ Yes        | Valid but uncommon               |
| kebab-case  | full-name  | ❌ No         | Not allowed in JS variables      |
| lowercase   | fullname   | ✅ Yes        | Valid but less readable          |

3️⃣ Data Types

🔹 Primitive Data Types

let z = 3;               // Number
let name = "Papon";      // String
let x = BigInt("123");   // BigInt → 123n
let y = Symbol("Hello"); // Symbol → Symbol(Hello)
isFollow = true;         // Boolean
let a;                   // Undefined
let b = null;            // Null

💡 Notes:

Number → integers & decimals.
String → text values.
BigInt → very large integers (123n).
Symbol → unique identifier (Symbol("Hello")).
Boolean → true/false .
Undefined → variable declared but not initialized.
Null → intentional absence of value (typeof null returns "object", but it’s a primitive).


🔹 Non-Primitive Data Types

Objects → Collections of key-value pairs. Arrays and functions are also objects.

const student = {
  fullName: "Sulaiman",
  age: 22,
  cgpa: 9,
  isPass: true,
};

// Update object properties

student["fullName"] = "Sulaiman Sufian";
student["age"] += 1;

// Two ways to print values from object

console.log(student.age);    // 23
console.log(student["cgpa"]); // 9


✅ Key Takeaways:

Objects store multiple related values.
Arrays and functions are technically objects.
Object properties can be updated even if object declared with const.


💡 Notes:

JS automatically converts types in some operations.
String + Number → concatenates as string.
Number + Number → sums numerically.

4️⃣ Quick Reference: `typeof`

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

📊 Quick Reference: typeof Test in Console

console.log(typeof 123);           // "number"
console.log(typeof "MX");          // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"
console.log(typeof 123n);          // "bigint"
console.log(typeof Symbol("Hi"));  // "symbol"
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function(){});  // "function"


✅ Key Takeaways:

Use typeof to quickly check variable types.
Arrays and functions return "object" or "function".


5️⃣ Code Examples – Objects & Product Example


🔹 Product Object

const product = {
  title: "Ball Pen",
  rating: 3.45,
  offer: 50,
  price: 250,
};

console.log(product);


✅ Explanation:
This creates an object called product with multiple key-value pairs:

typeof

title → String

rating → Number (decimal)

offer → Number (percentage)

price → Number


🔹 User Profile Object

const profile = {
  username: "@suliman",
  isFollow: false,
  followers: 1000,
  following: 123,
};

console.log(typeof profile);             // 📝 Prints "object" → profile is an object
console.log(typeof profile["username"]); // 📝 Prints "string" → username property is a string


✅ Explanation:
This defines a user profile with:

typeof

username → String

isFollow → Boolean

followers → Number

following → Number


💡 Notes:

Objects store multiple key-value pairs.
Use typeof to check type of object or its property.


✅ Key Takeaways:

Objects are fundamental for storing structured data.
Use dot or bracket notation to access properties.


6️⃣ JavaScript Operators Practice

🔹 Arithmetic Operators

let i = 5;
let j = 2;

console.log("a + b =", i + j); // Addition
console.log("a - b =", i - j); // Subtraction
console.log("a * b =", i * j); // Multiplication
console.log("a / b =", i / j); // Division
console.log("a % b =", i % j); // Modulus (remainder)
console.log("a ** b =", i ** j); // Exponentiation

💡 Notes:

"a + b" in quotes prints text literally.
(a + b) prints the numeric result.
( "a + b =", a + b ) prints both text and result.

✅ Quick Reference Table – Arithmetic Operators

| Operator | Description    | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | 5 + 2    | 7      |
| `-`      | Subtraction    | 5 - 2    | 3      |
| `*`      | Multiplication | 5 \* 2   | 10     |
| `/`      | Division       | 5 / 2    | 2.5    |
| `%`      | Modulus        | 5 % 2    | 1      |
| `**`     | Exponentiation | 5 \*\* 2 | 25     |


🔹 Unary Operators (Increment & Decrement)

i++;         // Post-increment | same as i = i + 1
console.log("++i =", ++i); // Pre-increment
console.log("i++ =", i++); // Post-increment
console.log("i =", i);

i--;         // Post-decrement | same as i = i - 1
console.log("--i =", --i); // Pre-decrement
console.log("i-- =", i--); // Post-decrement
console.log("i =", i);


💡 Notes:

++i → increments first, then prints.

i++ → prints first, then increments.

--i → decrements first, then prints.

i-- → prints first, then decrements.


✅ Quick Reference Table – Increment & Decrement

| Operator | Description    | Example  | Result             |
| -------- | -------------- | -------- | ------------------ |
| `++i`    | Pre-increment  | i=5; ++i | 6                  |
| `i++`    | Post-increment | i=5; i++ | prints 5, then i=6 |
| `--i`    | Pre-decrement  | i=5; --i | 4                  |
| `i--`    | Post-decrement | i=5; i-- | prints 5, then i=4 |

🔹 Assignment Operators

i += 4; // i = i + 4
i -= 4; // i = i - 4
i *= 4; // i = i * 4
i /= 4; // i = i / 4
i %= 4; // i = i % 4
i **= 4; // i = i ** 4


✅ Quick Reference Table – Assignment Operators

| Operator | Equivalent   | Example      | Result |
| -------- | ------------ | ------------ | ------ |
| `+=`     | `a = a + b`  | `a=5; a+=2`  | `7`    |
| `-=`     | `a = a - b`  | `a=5; a-=2`  | `3`    |
| `*=`     | `a = a * b`  | `a=5; a*=2`  | `10`   |
| `/=`     | `a = a / b`  | `a=5; a/=2`  | `2.5`  |
| `%=`     | `a = a % b`  | `a=5; a%=2`  | `1`    |
| `**=`    | `a = a ** b` | `a=5; a**=2` | `25`   |


✅ Key Takeaways:

Simplifies code instead of writing i = i + x.

Works with arithmetic, modulus, exponentiation.


🔹 Comparison Operators

let a = 5;
let b = "5";

console.log(a == b);  // true → loose equality, type conversion occurs
console.log(a === b); // false → strict equality, checks type & value
console.log(a != b);  // false → loose inequality
console.log(a !== b); // true → strict inequality
console.log(a >= b);  // true
console.log(a <= b);  // true
console.log(a > b);   // false
console.log(a < b);   // false

✅ Quick Reference Table – Comparison Operators

| Operator | Description        | Example   | Result |
| -------- | ------------------ | --------- | ------ |
| `==`     | Equal (loose)      | 5 == "5"  | true   |
| `===`    | Equal (strict)     | 5 === "5" | false  |
| `!=`     | Not equal (loose)  | 5 != "5"  | false  |
| `!==`    | Not equal (strict) | 5 !== "5" | true   |
| `>`      | Greater than       | 5 > 2     | true   |
| `<`      | Less than          | 5 < 2     | false  |
| `>=`     | Greater or equal   | 5 >= 5    | true   |
| `<=`     | Less or equal      | 5 <= 2    | false  |


💡 Notes:

== allows type conversion (string "5" → number 5).

=== does not allow conversion → strict comparison.



7️⃣ Logical & Conditional Operators

🔹 Logical Operators

let a = 6;
let b = 5;

console.log(a > b && a === 6); // AND → true if both conditions are true
console.log(a < b || a === 6); // OR  → true if at least one condition is true
console.log(!(a < b));         // NOT → negates the result

💡 Notes:

&& → true only if both conditions are true

|| → true if at least one condition is true

! → negates the boolean value

✅ Quick Reference Table – Logical Operators

| Operator | Meaning | Example       | Result |
| -------- | ------- | ------------- | ------ |
| `&&`     | AND     | true && false | false  |
| `|`      | OR      | true || false | true   |
| `!`      | NOT     | !true         | false  |

```

🔹 Conditional Statements – if, if...else, else if

```js

let age = 18;

// Basic if

if (age >= 18) {
  console.log("Exit");
}

// If...Else

if (age >= 18) {
  console.log("Exit");
} else {
  console.log("Enter");
}

// Else If for multiple conditions

if (age === 18) {
  console.log("Adult");
} else if (age === 60) {
  console.log("Senior");
} else {
  console.log("Minor");
}

// Dark Mode Example

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);

If...Else

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}

// Odd or Even Example

let num = 10;
if (num % 2 === 0) {
  console.log(num, "is Even");
} else {
  console.log(num, "is Odd");
}


💡 Notes:

Always use {} for clarity, even with one-line statements.
else if is cleaner than multiple separate if statements.
Use multiple conditions for complex checks.


✅ Quick Reference Table – Conditional Statements

| Statement   | Use Case                       | Example                      |
| ----------- | ------------------------------ | ---------------------------- |
| `if`        | Execute code if condition true | `if(x>5){...}`               |
| `if...else` | Choose between two blocks      | `if(x>5){...} else {...}`    |
| `else if`   | Multiple condition checks      | `if(x>10){...} else if(...)` |


🔹 Ternary Operator (Compact If-Else)

let result = age >= 18 ? "adult" : "minor";
console.log(result);

// Alternative compact usage

age >= 18 ? console.log("adult") : console.log("minor");


💡 Notes:

Ideal for simple conditional assignments or output.
Avoid using ternary operators for complex logic.

✅ Quick Reference Table – Ternary Operator

| Syntax                      | Example                     | Result    |
| --------------------------- | --------------------------- | --------- |
| `condition ? expr1 : expr2` | `age>=18 ? "adult":"minor"` | `"adult"` |


🔹 Switch Statement

let day = 3; // 1 = Monday, 2 = Tuesday, etc.

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

💡 Notes:

Each case should end with break to avoid fall-through.
default executes if no cases match.
Use switch for multiple exact matches of a single variable.


✅ Quick Reference Table – Switch Statement

| Keyword   | Description                                | Example        |
| --------- | ------------------------------------------ | -------------- |
| `case`    | Defines a possible value                   | `case 1: ...`  |
| `break`   | Stops further execution of following cases | `break;`       |
| `default` | Executes if no cases match                 | `default: ...` |


🔹 Key Takeaways – Logical & Conditional Operators

Logical operators help combine multiple boolean conditions.
Conditional statements (if, else if, else) handle decision-making.
Ternary operators offer compact conditional expressions.
Switch statements improve readability when comparing a single variable against multiple exact values.

💡 Pro Tips:

Prefer === over == to avoid type coercion surprises.
Always use blocks {} for clarity.
Keep conditions simple and readable.
Use ternary for short, simple decisions; use if...else for complex logic.
Switch is cleaner than multiple else if when checking exact values.


8️⃣ User Input – prompt()

let name = prompt("Hello");
console.log(name);

let number = prompt("Enter a number");
if (number % 5 === 0) {
  console.log(number, "is a multiple of 5");
} else {
  console.log(number, "is not a multiple of 5");
}

💡 Notes:

prompt() displays a message and allows the user to input a value.

The input is returned as a string, even if the user types a number.

If the user clicks Cancel, the result is null.

Use Number(prompt(...)) to convert input to a number when needed.

✅ Quick Reference Table – Prompt

| Function        | Description                  | Example                   |
| --------------- | ---------------------------- | ------------------------- |
| `prompt()`      | Shows a dialog box for input | `let name = prompt("Hi")` |
| `alert()`       | Shows a popup message        | `alert("Hello")`          |
| `console.log()` | Prints message to console    | `console.log("Hi")`       |


9️⃣ Type Coercion

console.log("abcd" + 123); // "abcd123"
console.log("123" + 1);    // "1231"
console.log(123 + 1);      // 124

💡 Notes:

JavaScript automatically converts data types in expressions when needed.

Strings + numbers → concatenation.

Numbers + numbers → arithmetic addition.

✅ Key Takeaways:

Always be careful when mixing data types.

Use explicit conversion (Number(), String()) to avoid unexpected results.

🔟 Console Testing – typeof & Data Types

let x = 123;
console.log(typeof x); // "number"

let y = "MX";
console.log(typeof y); // "string"

let z = true;
console.log(typeof z); // "boolean"

let a;
console.log(typeof a); // "undefined"

let b = null;
console.log(typeof b); // "object" (special case)

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

✅ Quick Reference Table – typeof Operator

| Value / Example | `typeof` Result |
| --------------- | --------------- |
| `123`           | `"number"`      |
| `"MX"`          | `"string"`      |
| `true`          | `"boolean"`     |
| `undefined`     | `"undefined"`   |
| `null`          | `"object"`      |
| `123n`          | `"bigint"`      |
| `Symbol("Hi")`  | `"symbol"`      |
| `{}` (object)   | `"object"`      |
| `[]` (array)    | `"object"`      |
| `function(){}`  | `"function"`    |

💡 Notes:

typeof is used to check the type of any value or variable.

Null is a special case: it is a primitive but returns "object".

1️⃣1️⃣ Code Examples – Objects
Product Object

const product = {
  title: "Ball Pen",
  rating: 3.45,
  offer: 50,
  price: 250,
};

console.log(product);

✅ Notes:

title → String

rating → Number (decimal)

offer → Number (integer, percentage)

price → Number

Profile Object

const profile = {
  username: "@suliman",
  isFollow: false,
  followers: 1000,
  following: 123,
};

console.log(typeof profile);        // "object"
console.log(typeof profile.username); // "string"

💡 Key Takeaways:

Objects store related values as key-value pairs.

Arrays and functions are also technically objects.

typeof is useful to verify the data type of properties.

✅ Summary – Console, Prompt, Type Coercion, and Objects

console.log() → prints messages.

alert() → shows popups.

prompt() → receives user input.

Type coercion happens automatically but can produce unexpected results.

Objects store related data in key-value pairs.

typeof helps inspect variable types.

💡 Pro Tips:

Convert prompt inputs explicitly to numbers if arithmetic is required.

Always verify types before performing operations.

Use meaningful object keys for readability.
```

<details>
<summary>See Example Code</summary>

```js
let a = 5;
let b = 2;
console.log(a + b); // 7
```

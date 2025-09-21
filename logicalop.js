// Logical Operators

let a = 6;
let b = 5;

/*let cond1 = a > b; // true
let cond2 = a === 6; // true
console.log("cond1 && cond2 =", cond1 && cond2); // true */

console.log("cond1 || cond2 =", a < b || a === 6); // true
console.log("!(6 < 5)", !(a < b)); // false

// Conditional Statements

// If

let age = 18;

if (age >= 18) {
  console.log("Exit");
}
if (age < 18) {
  console.log("Enter");
}

// Dark Mode

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);

// If Else

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

if (age >= 18) {
  console.log("Exit");
} else {
  console.log("Enter");
}

// odd or even

let num = 10;

if (num % 2 === 0) {
  console.log(num, "is Even");
} else {
  console.log(num, "is Odd");
}

if (age === 18) {
  console.log("Adult");
} else if (age === 60) {
  console.log("Senior");
} else {
  console.log("Minor");
}

if (mode === "dark") {
  color = "black";
} else if (color === "red") {
  color = "red";
} else {
  color = "while";
}
console.log(color);

if (mode === "dark") console.log(mode); //not recommended always use blocks

// Ternary Operators

let result = age >= 18 ? "adult" : "minor";
console.log(result);
age >= 18 ? console.log("adult") : console.log("minor");
age >= 18 ? "adult" : "minor"; // simpler, compact if-else
// Switch Statement Example
let day = 3; // 1 = Monday, 2 = Tuesday, 3 = Wednesday, etc.

switch (day) {
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

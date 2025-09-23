// Loop

// Without a loop (repeating code manually)
console.log("MX");
console.log("MX");
console.log("MX");
console.log("MX");
console.log("MX");
// This works, but it's repetitive and not recommended.

// Using a loop (better approach)

// Print 1-5 Loop
for (let i = 1; i <= 5; i++) {
  // let i = 1      → Start with i = 1 (initialization)
  // i <= 5         → Keep running as long as i is less than or equal to 5 (condition)
  // i++            → Increase i by 1 after each loop (update step)

  console.log("MX"); // Prints "MX" once per loop. Total: 5 times.
}
console.log("loop has ended");

// Program to calculate the sum of numbers from 1 to 5
let sum = 0; // Start with sum = 0 (initial value)

for (let i = 1; i <= 5; i++) {
  // i = 1         → Start counting from 1
  // i <= 5        → Keep looping until i reaches 5
  // i++           → Increase i by 1 each time

  sum = sum + i; // Add the current value of i to sum
  // First loop: sum = 0 + 1 = 1
  // Second loop: sum = 1 + 2 = 3
  // Third loop: sum = 3 + 3 = 6
  // Fourth loop: sum = 6 + 4 = 10
  // Fifth loop: sum = 10 + 5 = 15
}

console.log("sum =", sum); // Final result: 15
console.log("loop has ended"); // Runs after the loop finishes

// Using let (block scope)
for (let i = 1; i <= 5; i++) {
  console.log("i =", i); // Prints 1 → 2 → 3 → 4 → 5
}

console.log(i);
// ❌ Error: i is not defined
// Because "let" is block-scoped → i only exists inside the for loop.

// Using var (function/global scope)
for (var i = 1; i <= 5; i++) {
  console.log("i =", i); // Prints 1 → 2 → 3 → 4 → 5
}

console.log(i);

/* ✅ Prints 6
Because "var" is not block-scoped → i still exists outside the loop.
After the loop ends, i = 6 (since the loop stops when i > 5).
⚠️ Not recommended: Using var can cause unexpected bugs 
because the variable "leaks" outside its block. */

// While Loop

// While Loop Example 1: Printing the value of i
let k = 1; // Initialize i with 1
while (k <= 5) {
  // Condition: loop runs as long as i <= 5
  console.log("k =", k); // Print current value of i
  k++; // Increase i by 1 after each loop
}
// Output: i = 1, 2, 3, 4, 5

// While Loop Example 2: Printing a fixed string "MX"
let j = 1; // Initialize i with 1
while (j <= 100) {
  // Condition: loop runs while i <= 5
  console.log("MX"); // Print "MX" each time
  j++; // Increase i by 1
}
// Output: MX repeated 5 times

/*
let a = 20 
while (a <= 10){
 console.log("MX")
 i++
} 
*/

// Do-While Loop

let m = 20;
do {
  console.log("MX");
  m++;
} while (m <= 10);

let a = 1;
do {
  console.log("a =", a);
  a++;
} while (a <= 5);

// for of loop
let str = "MX";

for (let i of str) {
  // iterator -> characters
  console.log("i =", i);
}

let string = "JavaScript";
let size = 0;
for (let val of string) {
  console.log("val = ", val);
  size++;
}
console.log("string size =", size); // 10

// for in loop (used for objects and arrays)

let student = {
  fulName: "Sulaiman Sufian",
  age: 20,
  cgpa: 6.9,
  isPass: true,
};

for (let key in student) {
  console.log("key =", key, "value = ", student[key]);
}
for (let key in student) {
  console.log(key, "=", student[key]);
}

// Infinite Loop

/* 
❌ Infinite Loop Example (Do NOT use in real programs)
An infinite loop never ends because the condition always stays true.
This can freeze your program, crash a website, or overload the system.
*/

/*
for (let i = 1; i >= 0; i++) {
console.log("i =", i);
}
*/

/* 
Explanation:
i starts at 1
Condition: i >= 0 → always true because i keeps increasing (1, 2, 3, ...)
Since the condition never becomes false, the loop never stops. 
*/

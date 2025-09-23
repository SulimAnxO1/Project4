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

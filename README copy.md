# 📘 JavaScript Notes & Examples

This project demonstrates the basics of JavaScript programming, including:

Console, Alerts & Prompts

Variables & Scope

Data Types (Primitive & Non-Primitive)

Operators (Arithmetic, Assignment, Unary, Comparison, Logical)

Conditional Statements (if, else, else if, switch)

Loops

Strings
(placeholder)

Practice Exercises

It is designed for learning and practicing JavaScript fundamentals with detailed explanations, code examples, notes, Quick Reference tables, and Pro Tips.

## 🗂 Files Overview

| Folder/File  | Description                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `.tours`     | Contains a CodeTour file (`JS Notes.tour`) for guided notes/walkthroughs.                                          |
| `.vscode`    | Holds editor settings (`settings.json`) for spell checking and project configuration.                              |
| `HTML`       | Includes HTML files (`index.html`, `logicalop.html`, `loop.html`, `practice.html`, `strings.html`) for testing JS. |
| `JavaScript` | Contains JS files (`firstjs.js`, `logicalop.js`, `loop.js`, `practice.js`, `strings.js`) with examples/exercises.  |
| `ReadMe.md`  | Documentation file describing the project.                                                                         |

✅ Note: Each HTML file links to its corresponding JS file. See Practice Exercises
for exercises pulled from practice.js.

🔔 Console, Alerts & Prompts

<details><summary>Click to expand code examples</summary>

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


📊 Quick Reference :

| Function        | Description                 | Example                   |
| --------------- | --------------------------- | ------------------------- |
| `console.log()` | Prints message to console   | `console.log("Hi")`       |
| `alert()`       | Shows a popup message       | `alert("Hello")`          |
| `prompt()`      | Shows input dialog for user | `let name = prompt("Hi")` |

💡 Pro Tips:
Use console.log() during development and remove unnecessary alerts before production.


```

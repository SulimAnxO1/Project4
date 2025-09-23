// Parctice 1
// Task 1
const product = {
  title: "Ball Pen",
  rating: 3.45,
  offer: 50,
  price: 250,
};

console.log(product);

// Task 2

const profile = {
  username: "@suliman",
  isFollow: false,
  followers: 1000,
  following: 123,
};
console.log(typeof profile);
console.log(typeof profile["username"]);

// Parctice 2
// Task 1

let name = prompt("Hello");
console.log(name);

// Task 2

let number = prompt("enter a number");

if (number % 5 === 0) {
  console.log(number, "is multiple of 5");
} else {
  console.log(number, "is not multiple of 5");
}

// Task 3

let score = prompt("Enter your Score (0-100)");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("Your grade according to your score :", grade);

// Parctice 3
// Task 1

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("i", i);
  }
}

// Task 2

let gameNum = 69;
let userNum = prompt("Guess the Game Number :");
while (userNum != gameNum) {
  userNum = prompt("Wrong!! Try again!");
}
console.log("Great you got it right!!");

/*
let gameNum = "69";
let userNum = prompt("Guess the Game Number :");
while (userNum !== gameNum) {
  userNum = prompt("Wrong!! Try again!");
}
console.log("Great you got it right!!");
*/

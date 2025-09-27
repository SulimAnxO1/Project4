// Classes & Objects
// Objects

const student = {
  fullName: "Sulaiman Sufian",
  marks: 99,
  printMarks: function () {
    console.log("marks =", this.marks); // in object "this" means that its that object
  },
};
console.log(student);
console.log(student.fullName);
console.log(student.marks);
console.log(student.printMarks());

// Prototypes
console.log(student.toString); // this comes from prototype and prototype it-self is an object

let arr = ["A", "B", "C"];
console.log(arr); // (3) ['A', 'B', 'C']
arr.push("D"); // it comes from prototype by default
console.log(arr); // (4) ['A', 'B', 'C', 'D']

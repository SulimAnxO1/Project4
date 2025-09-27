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

const employee101 = {
  calTax1() {
    console.log("Tax rate is 10%"); // mostly used because of less keywords needed
  },
  calTax2: function () {
    console.log("Tax rate is 10%"); // also another way to use function's but not recommended
  },
};

const employee = {
  calTax() {
    console.log("Tax rate is 10%");
  },
};

const sulaimanSufian = {
  salary: 1000,
  calTax() {
    console.log("Tax rate is 20%");
  },
};
const sulaimanSufian2 = {
  salary: 700,
};
const sulaimanSufian3 = {
  salary: 800,
};
const sulaimanSufian4 = {
  salary: 600,
};
const sulaimanSufian5 = {
  salary: 300,
};

sulaimanSufian.__proto__ = employee;
sulaimanSufian2.__proto__ = employee;
sulaimanSufian3.__proto__ = employee;
sulaimanSufian4.__proto__ = employee;
sulaimanSufian5.__proto__ = employee;
// prototype is a reference to an object and a special property thats in every js object
// if object & prototype have same method objects method will be used

console.log(sulaimanSufian);
console.log(sulaimanSufian.calTax());

console.log(sulaimanSufian3);
console.log(sulaimanSufian3.calTax());

// Classes
// Classes it a program-code template for creating objects
// Classes is used if there is bulk of object to simplify
// inside Classes there no need to use "," for separation
class toyotaCar {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBand(brand) {
    this.brand = brand;
  }
}

// Create a object inside the class
let ford = new toyotaCar();
ford.setBand("Ford");

console.log(ford);
console.log(ford.start());
console.log(ford.stop());

// Constructor
// Constructor initializes object
// JS will automatically create a constructor if there is no constructor when invoked by "new"
// Constructor is the first thing that is invoked when a new object is created with class

class car {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

let lexus = new car("lexus", 12); // is brand name not assigned the it will be undefined
// to print brandName - lexus.brand = "lexus"

console.log(lexus);

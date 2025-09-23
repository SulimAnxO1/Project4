// Strings
let str = "Sulaiman"; // on console stc prints Sulaiman str.length prints 8
// let str = 'Sulaiman'
// strings has inbuilt properties and functions (methods)
// very strings has and internal variable one them is str.length every string has this
//Sulaiman
//01234567 this are positions also known as index(indices) it always starts with 0
console.log(str[0]); // S

// template literal
let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
  item: "pen",
  price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} $`;
console.log(output);
// number is highlighted because its converted to a string
console.log("The cost of", obj.item, "is", obj.price, "$");
// number is highlighted because its not a string

console.log("Sulaiman\nSufian");

let str1 = "Sulaiman\tSufian";
console.log(str1.length); // 12 (\t only counts as 1)

// String Methods

console.log(str1.toUpperCase()); // used string method

let str2 = "Sulaiman Sufian"; // original strings are immutable
str2.toUpperCase(); // doesn't change
str2 = str2.toLowerCase();
console.log(str2);
let str3 = "Sulaiman Sufian";
str3 = str3.toUpperCase(); // does change
console.log(str3);

let str4 = "  Sulaiman    Sufian   "; //doesn't trim of spaces from middle
console.log(str4.trim());

let str5 = "0123456";
console.log(str5.slice(1, 3)); //12
console.log(str5.slice(0, 3)); //012
console.log(str5.slice()); //0123456
console.log(str5.slice(1)); //123456

let str6 = "Sulaiman";
let str7 = "Sufian";

let res = str6.concat(str7);
console.log(res); // SulaimanSufian (Adds Strings)
let res1 = str6 + str7;
console.log(res1); // SulaimanSufian
let res2 = "I am" + str6 + str7;
console.log(res2); // I amSulaimamsufian
let res3 = "I am" + 123;
console.log(res3); // I am123

let str8 = "Hello";
console.log(str8.replace("H", "Y")); // Yello
console.log(str8.replace("lo", "p")); // Help  (Replace all given values)

let str9 = "Hellololo";
console.log(str9.replace("lo", "p")); // Helplolo (Replace only the first similar values)
console.log(str9.replaceAll("lo", "p")); // Help (Replace all similar values)
console.log(str9.charAt(4)); // o (Find character value)

let str0 = "Bad";
str0.replace("d", "t"); // doesnt change original strings cause its immutable
str0 = str0.replace("d", "t"); // now it changes
console.log(str0); // Bat

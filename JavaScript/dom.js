//DOM - Document Object Model
// DOM objects are called nodes
console.log(window);
console.log(window.document);
console.dir(document); // console.dir(window.document); alternate way to print document
// dir is used to print objects it is also a part of windows object
console.dir(document.body); //used to print html body in detail
console.log(document.body); //only shows the html's body code
console.dir(document.body.childNodes); // prints all nodes inside html-body
console.dir(document.body.childNodes[1]); // prints no 1 node inside html-body
console.dir((document.body.style.background = "black")); // used for Dark mode
document.body.childNodes[3].innerText = "Suli"; // Way to change Text

// DOM Manipulation (Became a way better manipulator then your Ex )

// First way to access Elements by using id name
let heading = document.getElementById("hzero"); // h1
console.log(heading);
console.dir(heading); // use dir for objects

// Second way to access Elements by using class name
let headings = document.getElementsByClassName("hzero");
console.dir(headings);
console.log(headings);

let button = document.getElementById("my id"); // h1
console.log(button);
console.dir(button);

// Third way to access Elements by using tag name
let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);

// Better Way to access Elements is by using Query Selector
// Query Selector
let element = document.querySelector("p"); // only selects 1st element of the inserted value
console.dir(element);
let elements = document.querySelectorAll("p"); // selects all elements of the inserted value
console.dir(elements); // prints nodes list

let cls = document.querySelectorAll(".hzero"); // to select class - .className
console.dir(cls);

let myId = document.querySelector("#hzero"); // to select class - #idName
console.dir(myId);

// Manipulate Properties better then your Ex
// Manipulate Properties (get - value check , set, change/update)
// Properties - tagName, innerText, innerHTML, textContent

console.dir(element.tagName); // prints tagName
console.dir(element.tagName); //
console.dir(document.body.firstChild); // #text
//(3types of DOM tree nodes text,comment,element ) elements nodes are used for development
console.dir(document.body.lastChild); // script

let div = document.querySelector(".fruits");
console.dir(div);
console.dir(div.innerText); // show the text inside the selected element
console.dir(div.innerHTML); // show the HTML code inside the selected element
console.dir((div.innerText = "D")); // changes the Text inside th selected element
console.dir((div.innerHTML = "<div><h1>D</h1></div>")); // changes the HTML code inside th selected element

let hide = document.querySelector(".Heading");
console.dir(hide.innerText); // prints nothing cause the content is hidden
console.dir(hide.textContent); // show the hidden text content

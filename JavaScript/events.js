// Events
//Inline handle < JS handle

let button1 = document.querySelector("#button1");
button1.onclick = (e) => {
  console.log("button1 was clicked");
}; // same handle cannot be use twice if used it will override the previous one

let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("your are inside dive");
};

// Event Object
button1.onclick = (e) => {
  console.log(e);
  console.log(e.type); // generally used
  console.log(e.target); // generally used
  console.log(e.clientX, e.clientY); // used for making games
};

// Event Listeners
// Can use same handle without overriding the other

div.addEventListener("mouseover", (e) => {
  console.log("Mouse hovered over");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
});
div.addEventListener("mouseover", () => {
  console.log("Mouse hovered over 2");
});

const handler3 =
  ("mouseover",
  () => {
    console.log("Mouse hovered over 3");
  });
div.addEventListener("mouseover", handler3);
div.addEventListener("mouseover", () => {
  console.log("Mouse hovered over 4");
});

div.removeEventListener("mouseover", handler3); // to remove 1st need to create a variable

// Dark Mode

let modeBtn = document.querySelector("#Mode");
let currentMode = "light";
modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currentMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currentMode);
});

// Alternative Way

let modeBtn2 = document.querySelector("#Mode1");
let body = document.querySelector("body");
let currentMode2 = "light";
modeBtn2.addEventListener("click", () => {
  if (currentMode2 === "light") {
    currentMode2 = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currentMode2 = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currentMode2);
});

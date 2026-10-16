//console.log("Hello, Javascript!");
//console.log(25);

//  Hello World!

/*
This comment can continue across multiple
*/

/*const userName = "Sahand";

let score = 10;

const isStudent = true;
let city;
const selectedCourse = null;

score = 20;*/

/*console.log(userName);
console.log(score);

console.log(typeof userName);
console.log(typeof score);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof selectedCourse);*/

/*console.log(score + 5);
console.log(score - 5);
console.log(score * 2);
console.log(score / 2);*/

/*console.log(score > 10);
console.log(score < 10);
console.log(score >= 10);
console.log(score <= 10);*/

/*console.log(score === 20);
console.log(score === "20");*/

/*console.log(score >= 18 && isStudent);
console.log(score > 18 || isStudent);
console.log(!isStudent);*/

/*let age = 25;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

if (age < 13) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}*/

/*function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("John");
console.log(message);*/

/*function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let resenje = add(5, 12);
console.log(resenje);*/

/*const add = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

const total = add(5, 3);
console.log(total);*/

/*const languages = ["HTML", "CSS", "JavaScript"];

console.log(languages[0]);
console.log(languages[2]);

languages[1] = "CSS3";
console.log(languages);

console.log(languages.length);

languages.push("React");
console.log(languages);

const removedLanguage = languages.pop();
console.log(removedLanguage);
console.log(languages);
*/

//const languages = ["HTML", "CSS", "JavaScript"];

/*for (let i = 1; i <= 5; i++) {
  console.log(i);
}*/

/*for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}*/

/*languages.forEach(function (language) {
  console.log(language);
});
*/

/*const user = {
  name: "John",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

console.log(user.name);

console.log(user["age"]);

user.age = 26;
console.log(user.age);

user.greet();

console.log(user);*/

/*const heading = document.querySelector("h1");
const message = document.getElementById("message");

heading.textContent = "JavaScript is working";
message.textContent = "The DOM has been updated";

heading.style.color = "royalblue";
message.style.backgroundColor = "#f0f0f0";

const button = document.getElementById("action-button");

button.addEventListener("click", function () {
  console.log("The button was clicked.");
  message.textContent = "The button was clicked.";
});
*/

const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const resetButton = document.getElementById("reset");

increaseButton.addEventListener("click", increaseCount);

decreaseButton.addEventListener("click", decreaseCount);

resetButton.addEventListener("click", resetCount);

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

function increaseCount() {
  count++;
  updateDisplay();
}

function decreaseCount() {
  if (count > 0) {
    count--;
  }
  updateDisplay();
}

function resetCount() {
  count = 0;
  updateDisplay();
}

increaseButton.style.cursor = "pointer";

const yesButton = document.getElementById("yes");

yesButton.addEventListener("click", () => {
  alert("Git makes changes easy to track!");
});

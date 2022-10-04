let prevTerm = "";
let curTerm = "";
let operator = null;

function clearScreen() {
  prevTerm = "";
  curTerm = "";
  operator = null;
  //update display
  return;
}

function updateCurTerm(number) {
  //append digits to current term
  //update display
  console.log(number);
  return;
}

function setOperator(operator) {
  //set operator
  //move curTerm value to prevTerm
  //update prevterm display to show operator
  return;
}

function setNegative() {
  curTerm = -curTerm + "";
  //update
  return;
}

function deleteLast() {
  curTerm = curTerm.slice(0, curTerm.length - 1);
  //update
  return;
}

function updateTop() {
  return;
}

function updateMain() {
  return;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  return num1 / num2;
};

const mainDisplay = document.querySelector("#screenContentMain");
const topDisplay = document.querySelector("#screenContentTop");

let numberKeys = document.querySelectorAll(".number");
let operatorKeys = document.querySelectorAll(".operator");
let clearKey = document.querySelector(".clear");
let equalsKey = document.querySelector(".equals");
let deleteKey = document.querySelector(".delete");
let negativeKey = document.querySelector(".negative");

numberKeys.forEach((numberKey) => {
  numberKey.addEventListener("click", () =>
    updateCurTerm(numberKey.dataset.value)
  );
});

mainDisplay.textContent = "";
topDisplay.textContent = "";

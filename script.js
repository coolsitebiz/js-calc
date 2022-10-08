let prevTerm = "";
let curTerm = "";
let operator = null;
let complete = false;

function clearScreen() {
  prevTerm = "";
  curTerm = "";
  operator = null;
  updateMain(curTerm);
  updateTop(prevTerm);
  return;
}

function updateCurTerm(number) {
  if (number == "." && curTerm.toString().includes(".")) {
    return;
  }
  if (number == 0 && curTerm.toString().length == 0) {
    return;
  }
  if (curTerm == 0 || complete === true) {
    curTerm = number;
    complete = false;
    updateMain(curTerm);
    return;
  }
  curTerm += number;
  updateMain(curTerm);
  console.log(number);
  return;
}

function setOperator(op) {
  if (!curTerm) {
    return;
  }
  if (curTerm && prevTerm) {
    result = operate(operator, prevTerm, curTerm);
    operator = op;
    prevTerm = result;
    curTerm = '';
    updateTop(`${prevTerm} ${operator}`);
    updateMain(curTerm);
    return;
  }
  operator = op;
  prevTerm = curTerm;
  curTerm = '';
  updateTop(`${prevTerm} ${operator}`);
  updateMain(curTerm);
  return;
}

function setNegative() {
  if(curTerm.length === 0) return;
  curTerm = -curTerm + "";
  updateMain(curTerm);
}

function deleteLast() {
  if (!curTerm) {
    return;
  }
  if (complete) {
    clearScreen();
    complete = false;
    return;
  }
  curTerm = curTerm.slice(0, curTerm.length - 1);
  updateMain(curTerm);
  return;
}

function equals() {
  if (!curTerm || !prevTerm) {
    return;
  }
  //need to reset on input after displaying result
  result = operate(operator, prevTerm, curTerm);
  prevTerm = '';
  curTerm = result.toString();
  operator = null;
  complete = true;
  updateTop(prevTerm);
  updateMain(curTerm);
}

function updateTop(content) {
  topDisplay.textContent = content;
}

function updateMain(content) {
  mainDisplay.textContent = content;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(parseFloat(num1), parseFloat(num2));
    case "-":
      return subtract(parseFloat(num1), parseFloat(num2));
    case "x":
      return multiply(parseFloat(num1), parseFloat(num2));
    case "/":
      return divide(parseFloat(num1), parseFloat(num2));
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

operatorKeys.forEach(operatorKey => {
  operatorKey.addEventListener("click", () => {
    setOperator(operatorKey.dataset.value);
  });
});

clearKey.addEventListener('click', clearScreen);
negativeKey.addEventListener('click', setNegative);
deleteKey.addEventListener('click', deleteLast);
equalsKey.addEventListener('click', equals);

mainDisplay.textContent = "";
topDisplay.textContent = "";

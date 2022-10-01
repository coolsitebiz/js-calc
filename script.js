let displayNumber = 0;
let term1 = null;
let term2 = null;
let operator = null;

//need to set terms and fix calculate


const screenOutput = document.querySelector("#screenContent");

function negative() {
  displayNumber = -displayNumber;
  setDisplay(displayNumber);
}

function percent() {
  displayNumber = displayNumber/100;
  setDisplay(displayNumber);
}

function setOperator(op) {
  operator = op.dataset.value;
}

function calculate() {
  let result = operate(operator, term1, term2);
  setDisplay(result);

}

function updateDisplay(num) {
  let value = num.dataset.value;
  if (displayNumber === 0) {
    displayNumber = value;
    setDisplay(displayNumber);
  } else {
    displayNumber += value;
    setDisplay(displayNumber);
  }
}

function setDecimal() {
  if (displayNumber.toString().includes(".")) {
    return;
  }
  displayNumber += ".";
  setDisplay(displayNumber);
}

function setDisplay(content) {
  screenOutput.textContent = content;
}

function clearScreen() {
  term1 = null;
  term2 = null;
  displayNumber = 0;
  setDisplay(displayNumber);
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

let add = (num1, num2) => {
  return num1 + num2;
};
let subtract = (num1, num2) => {
  return num1 - num2;
};
let multiply = (num1, num2) => {
  return num1 * num2;
};
let divide = (num1, num2) => {
  return num1 / num2;
};

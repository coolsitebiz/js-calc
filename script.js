let output = 0;
let done = false;
let num1 = 0;
let num2 = 0;
let operator = "";
let curNum = num1;

const screenOutput = document.querySelector("#screenContent");
const key1 = document.querySelector("#one");
const key2 = document.querySelector("#two");
const key3 = document.querySelector("#three");
const key4 = document.querySelector("#four");
const key5 = document.querySelector("#five");
const key6 = document.querySelector("#six");
const key7 = document.querySelector("#seven");
const key8 = document.querySelector("#eight");
const key9 = document.querySelector("#nine");
const keyClear = document.querySelector("#clear");
const keyAdd = document.querySelector("#add");
const keySubtract = document.querySelector("#subtract");
const keyMultiply = document.querySelector("#multiply");
const keyDivide = document.querySelector("#divide");
const keyDecimal = document.querySelector("#decimal");
const keyEquals = document.querySelector("#equals");

//change to output update
/* function updateInput(e) {
  if (input === 0) {
    input = e.dataset.value;
    screenInput.textContent = input;
  } else {
    input += e.dataset.value;
    screenInput.textContent = input;
  }
} */

function setNum(num) {
  let value = num.dataset.value;
  if (curNum === 0) {
    if (value === "0") {
      return;
    }
    curNum = value;
  } else {
    curNum += value;
  }
  setDisplay(curNum);
}

function setDecimal() {
  if (curNum.toString().includes(".")) {
    return;
  }
  curNum += ".";
  setDisplay(curNum);
}

function setDisplay(content) {
  screenOutput.textContent = content;
}

function clearScreen() {
  output = 0;
  num1 = 0;
  curNum = num1;
  screenOutput.textContent = 0;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
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

let input = 0;
let output = 0;

const screenInput = document.querySelector("#screenContentTop");
const screenOutput = document.querySelector("#screenContentMain");
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

function updateInput(e) {
  if (input === 0) {
    input = e.textContent;
    screenInput.textContent = input;
    console.log(input);
    return;
  } else {
    input += e.textContent;
    screenInput.textContent += e.textContent;
  }
}

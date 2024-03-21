import sendValue from "./code.js";

const root = document.getElementById("root");

const containt = `
<div class="calc-screen">
  <textarea id="display" class="calc-typed" rows="1" cols="30"></textarea>
</div>
<div>
  <textarea id="display1" class="calc-operation" rows="1" cols="30"></textarea>
  <button class="btn btn1 btn-number" value="1">1</button>
  <button class="btn btn2 btn-number" value="2">2</button>
  <button class="btn btn3 btn-number" value="3">3</button>
  <button class="btn btn4 btn-number" value="4">4</button>
  <button class="btn btn5 btn-number" value="5">5</button>
  <button class="btn btn6 btn-number" value="6">6</button>
  <button class="btn btn7 btn-number" value="7">7</button>
  <button class="btn btn8 btn-number" value="8">8</button>
  <button class="btn btn9 btn-number" value="9">9</button>
  <button class="btn btn0 btn-number" value="0">0</button>
  <button class="btn btnAdd btnOp" value="+">+</button>
  <button class="btn btnSub btnOp" value="-">-</button>
  <button class="btn btnMod btnOp" value="%">%</button>
  <button class="btn btnDiv btnOp" value="/">/</button>
  <button class="btn btnMul btnOp" value="*">*</button>
  <button class="btn btnAns btn-equal">=</button>
  <button class="btn btn-clear clr">CLEAR</button>
</div>
`;
root.innerHTML = containt;
const displayString = document.getElementById("display");
const displayString1 = document.getElementById("display1");
const operations = document.querySelectorAll(".btnOp");
const equalBtn = document.querySelector(".btnAns");
const clearBtn = document.querySelector(".clr");
const button = document.querySelectorAll(".btn");
let text;
let num;
let arrNum = [];
let operator;

button.forEach((btnEle) => {
  btnEle.addEventListener("click", () => {
    text = btnEle.textContent;
    sendValue(text);
  });
});

operations.forEach((opEle) => {
  opEle.addEventListener("click", () => {
    operator = opEle.value;
    let textContent = displayString.value;
    num = parseFloat(textContent);
    arrNum.push(num);
    console.log(arrNum);
    displayString.value = "";
    sendOp(operator);
  });
});

equalBtn.addEventListener("click", () => {
  const dispalyText = parseFloat(displayString.value);
  arrNum.push(dispalyText);
  let operation = displayString1.value;
  calculate(arrNum, operation);
});

clearBtn.addEventListener("click", () => {
  displayString.value = "";
  displayString1.value = "";
  arrNum = [];
});

function calculate(array, operation) {
  let result;
  switch (operation) {
    case "+":
      result = array.reduce((a, b) => a + b);
      break;
    case "-":
      result = array.reduce((a, b) => a - b);
      break;
    case "*":
      result = array.reduce((a, b) => a * b);
      break;
    case "/":
      result = array.reduce((a, b) => a / b);
      break;
    case "%":
      result = array.reduce((a, b) => a % b);
      break;
    default:
      break;
  }
  displayString.value = result;
  arrNum = [];
}

function sendOp(operator) {
  displayString1.value = operator;
}

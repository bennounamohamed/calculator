let resultDisplay = document.querySelector(".result-number");

let numbers = document.querySelectorAll(".number");

let operators = document.querySelectorAll(".operator");

let equal = document.querySelector(".equal");

let reset = document.querySelector(".reset-btn");

let operator = "";

let firstNum = "";

let secondNum = "";

// main calculate function
function calculate(operator, firstNum, secondNum) {
  let result;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = substract(firstNum, secondNum);
      break;
    case "/":
      result = divide(firstNum, secondNum);
      break;
    case "*":
      result = multiply(firstNum, secondNum);
      break;
    default:
      result = alert("Sorry, operator is not added yet.");
  }
  return result;
}

// Functions for different math operations (add, divide..)
function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function handleNumber(num) {
  if (firstNum.length <= 5) {
    secondNum += num;
  }
}

numbers.forEach((button) =>
  button.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    resultDisplay.textContent = secondNum;
  })
);

function handleOperator(op) {
  operator = op;
  firstNum = secondNum;
  secondNum = "";

  resultDisplay.textContent += operator;
}

operators.forEach((op) =>
  op.addEventListener("click", (e) => {
    handleOperator(e.target.value);
  })
);

reset.addEventListener("click", () => {
  secondNum = "";
  firstNum = "";
  operator = "";
  resultDisplay.textContent = "";
});

// SUm

equal.addEventListener("click", () => {
  resultDisplay.textContent = calculate(operator, firstNum, secondNum);
});

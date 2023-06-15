let resultDisplay = document.querySelector(".result-number");

let buttons = document.querySelectorAll(".button");

let inputArray = [];

// main calculate function
function calculate(operator, firstNum, secondNum) {
  let result;
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

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    resultDisplay.textContent += e.target.value;
    inputArray.push(resultDisplay.textContent);
    console.log(inputArray);
  })
);

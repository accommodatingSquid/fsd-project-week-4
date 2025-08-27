// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(parseFloat(value));
}

function setDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(value);
}

function getDisplay(value) {
  const display = document.getElementById("display");
  display.value = value;
}

//Set up display to show zero when starting
updateDisplay(0);

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 *
 * HINT: This function should:
 * 1. Check if input is a number (0-9) and handle number input
 * 2. Check if input is an operator (+, -, *, /) and handle operator input
 * 3. Check if input is a decimal point (.) and handle decimal input
 * 4. Check if input is equals (=) and execute the operation
 * 5. Check if input is clear (C) and reset the calculator
 * 6. Don't forget to call updateDisplay() at the end to refresh the screen!
 */
function handleInput(input) {
  console.log(`Button clicked: ${input}`);
  // Your code here
  // Use if statements to check what type of input was received
  // Then call the appropriate helper function
    if (isNaN(input)){ 
      if (input == '.'){
        handleDecimal();
      }else if (input=='C'){
        resetCalculator();
      }else if (input=='='){
        executeOperation();
      }else{
        handleOperator(input)
      }
    }else{
      handleNumber(input);
    }
  // Don't forget to call updateDisplay() at the end!
}
let firstNumber = 0;
let secondNumber = 0;
let isSecondNumber = false;
let operator = 0;
// TODO: Create your arithmetic operation functions here
// You will need: add, subtract, multiply, and divide functions
// Each should take two parameters (first, second) and return the result
// Don't forget to add console.log statements for debugging!
// Remember: division should check for division by zero and return "Error"


function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  if (num2 == 0){
    return console.error("divide by zero.")
  }else{
    return num1 / num2;
  }
}

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}
/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */
function handleNumber(number) {
  // Your code here
  // This function should update the displayValue
  // Consider: Are we starting fresh? Continuing a number?
  if (!isSecondNumber){
    firstNumber = firstNumber.toString().concat(number);
    updateDisplay(firstNumber);
    console.log(firstNumber);
  }else{
    secondNumber = secondNumber.toString().concat(number);
  updateDisplay(secondNumber);
  console.log(secondNumber);
  }
}

/**
 * Handles decimal point input
 */
function handleDecimal() {
  // Your code here
  // Make sure you don't add multiple decimal points to one number
}

/**
 * Handles operator input (+, -, *, /)
 * @param {string} nextOperator - The operator that was clicked
 */
function handleOperator(nextOperator) {
  // Your code here
  // Store the first number and operator
  // Prepare for the second number input

  switch(nextOperator){
    case '/':
      operator = 1;
    case '*':
      operator = 2;
    case '-':
      operator = 3;
    case '+':
      operator = 4;
  }
  updateDisplay(0);
  isSecondNumber = true;

}

/**
 * Executes the calculation when = is pressed
 */
function executeOperation() {
  // Your code here
  // Use if/else statements to call the right operation function
  // Handle the result and any errors
  let result = 0;
  switch(operator){
    case 1:
      result = divide(Number(firstNumber),Number(secondNumber));
    case 2:
      result = multiply(Number(firstNumber),Number(secondNumber));
    case 3:
      result = subtract(Number(firstNumber),Number(secondNumber));
    case 4:
      result = add(Number(firstNumber),Number(secondNumber));
    }
    firstNumber = result;
    secondNumber = 0;
    updateDisplay(result);
    
}

/**
 * Resets the calculator (C button)
 */
function resetCalculator() {
  // Your code here
  // Reset all state variables and display
  isSecondNumber = false;
  firstNumber = 0;
  secondNumber = 0;
  operator = 0;
  updateDisplay(0);
}

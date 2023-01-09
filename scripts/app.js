const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calcDescription); // From vendor.js
}

function add() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  let logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
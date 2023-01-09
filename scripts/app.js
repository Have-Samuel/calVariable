const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber)
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
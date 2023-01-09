const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const enteredNumber = parseInt(userInput.value)
  const calcDescription =`${currentResult} + ${enteredNumber}`
  currentResult += enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

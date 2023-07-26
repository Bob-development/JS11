'use sctrict'

const expression = prompt("Enter ur math expression with two num");
let firstNum = 0;
let secondNum = 0;
let indexCounter = 0;
let result;
let expressionInArr = expression.split("");
let isRunning = true;


transferToFirstNumber();
console.log('[firstNum]',firstNum);

transferToSecondNumber();
console.log('[secondNum]',secondNum);

resultOfExpression();

function transferToFirstNumber() {
  for (let i = 0; i < expression.length; i++){
    indexCounter += 1;

    if (isFinite(expressionInArr[i])){
      firstNum += expressionInArr[i];
    }
    else return firstNum = parseInt(firstNum.slice(0));
  }
}

function transferToSecondNumber() {
  for (let i = indexCounter; i < expression.length; i++){
    if (!isNaN(parseInt(expressionInArr[i]))){
      secondNum += expressionInArr[i];
    } else continue;
  }
  
  return secondNum = parseInt(secondNum);
}

function resultOfExpression() {
  if (expressionInArr.includes("+")){
    result = firstNum + secondNum;
    alert("Ur result: " + result);
  }

  if (expressionInArr.includes("-")){
    result = firstNum - secondNum;
    alert("Ur result: " + result);
  }

  if (expressionInArr.includes("*")){
    result = firstNum * secondNum;
    alert("Ur result: " + result);
  }

  if (expressionInArr.includes("/")){
    result = firstNum / secondNum;
    alert("Ur result: " + result);
  }
}
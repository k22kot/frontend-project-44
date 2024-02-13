import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomInt(0, operators.length - 1);
  return operators[index];
};

const calculate = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return 'error';
  }
};

const checkAnswer = () => {
  const firstOperand = getRandomInt(1, 100);
  const secondOperand = getRandomInt(1, 100);
  const operator = getOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
  return [question, correctAnswer];
};

const startCalc = () => {
  const iteration = [];
  for (let i = 0; i < 3; i += 1) {
    iteration[i] = checkAnswer();
  }
  playGame(description, iteration);
};

export default startCalc;

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

const getAnswer = () => {
  const firstOperand = getRandomInt(1, 100);
  const secondOperand = getRandomInt(1, 100);
  const operator = getOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(calculate(operator, firstOperand, secondOperand));
  return [question, answer];
};

const startCalc = () => {
  playGame(description, getAnswer);
};

export default startCalc;

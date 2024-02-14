import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => {
  if (secondNumber > 0) {
    const divider = firstNumber % secondNumber;
    return nod(secondNumber, divider);
  }

  const abs = Math.abs(firstNumber);
  return abs;
};

const getAnswer = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(nod(firstNumber, secondNumber));
  return [question, answer];
};

const startGcd = () => {
  playGame(description, getAnswer);
};

export default startGcd;

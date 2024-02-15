import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number % 2 === 0) {
    return number === 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = () => {
  const question = getRandomInt(1, 100);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrime = () => {
  playGame(description, getAnswer);
};

export default startPrime;

import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const evenOrOdd = (number) => number % 2 === 0;

const getAnswer = () => {
  const question = getRandomInt(1, 100);
  const answer = evenOrOdd(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  playGame(description, getAnswer);
};

export default startEven;

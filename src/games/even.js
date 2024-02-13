import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const evenOrOdd = (number) => number % 2 === 0;

const checkAnswer = () => {
  const question = getRandomInt(1, 100);
  const answer = evenOrOdd(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  const iteration = [];
  for (let i = 0; i < 3; i += 1) {
    iteration[i] = checkAnswer();
  }
  return playGame(description, iteration);
};

export default startEven;

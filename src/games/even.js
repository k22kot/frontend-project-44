import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getAnswer = () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  playGame(description, getAnswer);
};

export default startEven;

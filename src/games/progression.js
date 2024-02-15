import getRandomInt from '../utilities.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const number = getRandomInt(1, 100);
  const d = getRandomInt(1, 100);
  const array = [];
  array.push(number);
  for (let i = 1; i < 10; i += 1) {
    const nextNumber = number + i * d;
    array.push(nextNumber);
  }
  return array;
};

const getAnswer = () => {
  const progression = getProgression();
  const randomIndex = getRandomInt(0, progression.length - 1);
  const point = '..';
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = point;
  const question = progression.join(' ');
  return [question, answer];
};

const startProgression = () => {
  playGame(description, getAnswer);
};

export default startProgression;

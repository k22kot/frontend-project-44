import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

function evenOrOdd(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

const success = 'Correct!';
const lose = 'end';

function checkAnswer(number, answer) {
  const even = 'yes';
  const odd = 'no';
  if (number % 2 === 0 && answer === even) {
    return success;
  } if (number % 2 !== 0 && answer === odd) {
    return success;
  }
  return lose;
}

export default function main() {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const min = 0;
  const max = 100;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(min, max);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const result = checkAnswer(number, answer);
    const correctAnswer = evenOrOdd(number);
    if (result === lose) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

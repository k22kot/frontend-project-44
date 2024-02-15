import readlineSync from 'readline-sync';

export default function playGame(description, answerFunction) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const array = answerFunction();
    const question = array[0];
    const answer = array[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"\nLet's try again, ${name}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

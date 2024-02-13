import readlineSync from 'readline-sync';

export default function playGame(description, iteration) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = iteration[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

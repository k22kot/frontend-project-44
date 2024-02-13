import getRandomInt from "../utilities.js";
import playGame from "../index.js";

const description = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => {
    if(secondNumber > 0) { 
      let divider = firstNumber % secondNumber;
      return nod(secondNumber, divider);
    } 
    else { 
      const abs = Math.abs(firstNumber);
      return abs;  
    }
  }

  const checkAnswer = () => {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(nod(firstNumber, secondNumber));
    return [question, answer];
  }

  const startGcd = () => {
    const iteration = [];
    for (let i = 0; i < 3; i += 1) {
      iteration[i] = checkAnswer();
    }
    return playGame(description, iteration);
  }

  export default startGcd;
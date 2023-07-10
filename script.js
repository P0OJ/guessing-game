'use strict';
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayText(className, message) {
  document.querySelector(className).textContent = message;
}

let secretNumber = randomNumber();
//Again button to restart the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  displayText('.number', '?');
  document.querySelector('.guess').value = '';
  displayText('.message', 'Start guessing..');
  score = 20;
  displayText('.score', score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
//Check the value button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //No number
  if (!guess) {
    displayText('.message', 'Enter any number peep 👿');
  }
  //correct number
  else if (guess === secretNumber && score > 0) {
    displayText('.message', 'You won 😁');
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayText('.number', secretNumber);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
    console.log(score);

    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }
  }
  //low
  else if (guess !== secretNumber) {
    if (score > 1) {
      //low
      if (guess < secretNumber) {
        displayText('.message', 'Too low 🥱');
      }
      //high
      else if (guess > secretNumber) {
        displayText('.message', 'Too high 🥴');
      }
      score--;
      displayText('.score', score);
    }
    //game lost
    else {
      displayText('.message', 'You lost 😝 but you can try again');
      score--;
      displayText('.score', 0);

      displayText('.number', secretNumber);
    }
  }
});

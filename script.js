let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult(playerChoice, computerChoice);

  if (result === 'win') {
    playerScore++;
    resultText.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if (result === 'lose') {
    computerScore++;
    resultText.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
  } else {
    resultText.textContent = `It's a Tie! You both chose ${playerChoice}`;
  }

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

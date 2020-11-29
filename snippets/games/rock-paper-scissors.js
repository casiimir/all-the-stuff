// Rock, Paper, Scissors.
// Please open it in Chrome Console, 'prompt' func. it doesn't work in Node.js.

// Pair => -1 | Win => 1 | Lose => 0
function playRound(playerSelection, computerSelection) {
  console.log(`Player: ${playerSelection} - Computer: ${computerSelection}.`);
  if (playerSelection === computerSelection) return -1;
  else if (playerSelection === 'rock' &&
      computerSelection === 'scissors') return 1;
  else if (playerSelection === 'paper' &&
      computerSelection === 'rock') return 1;
  else if (playerSelection === 'scissors' &&
      computerSelection === 'paper') return 1;
  else return 0;
}

function playerChoiche() {
  return prompt('Your choiche: ').toLowerCase();
}

function computerChoiche() {
  const possibileChoiche = ['rock', 'paper','scissors'];
  const randomChoice = Math.floor(Math.random() * possibileChoiche.length);
  return possibileChoiche[randomChoice];
}

function startGame() {
  let playerPoints = 0, computerPoints = 0;
  for (let x = 1; x < 5; x++) {
    const result = playRound(playerChoiche(), computerChoiche())
    result === -1 ? null : result ? 
        playerPoints++ : computerPoints ++;
  }
  return (`player: ${playerPoints} - computer: ${computerPoints}`);
}

startGame();
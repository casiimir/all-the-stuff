// COMPUTER - random choiche
function computerChoiche() {
  const possibileChoiche = ['Rock', 'Paper','Scissor'];
  const randomChoice = Math.floor(Math.random() * possibileChoiche.length);
  return possibileChoiche[randomChoice];
}

// ROUND
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;
  if (playerSelection === 'Rock' && computerSelection === 'Scissor' || 
      playerSelection === 'Paper' && computerSelection === 'Rock' ||
      playerSelection === 'Scissor' && computerSelection === 'Paper'
  ) {
    return 1;
  } else {
    return -1;
  }
}

function playerChoicheHtml (choice) {
  const playerSelection = document.querySelector('.player-choiche');
  playerSelection.innerText = choice;
}

function computerChoicheHtml (choice) {
  const playerSelection = document.querySelector('.computer-choiche');
  playerSelection.innerText = choice;
}

function whoWinBetween (player, computer) {
  winner = playRound(player, computer);
  playerChoicheHtml(player);
  computerChoicheHtml(computer);

  if (winner === 0) {
    showWinner('Draft!')
  } else if (winner === 1) {
    showWinner('Player')
  } else {
    showWinner('Computer');
  }
  return winner;
}

// Edit the html text
function showWinner(winnerIs) {
  const playerSelection = document.querySelector('.winner-is');
  playerSelection.innerText = winnerIs;
}

// get DOM buttons:
function playGame () {
  const buttons = document.querySelectorAll('.btn');
  // whenever you do click on user buttons compare player and computer choiche

  for (i of buttons) {
    i.addEventListener('click', (e) => {
      let computer =  computerChoiche();
      let player = e.target.name;
      whoWinBetween(player, computer);
    })
  }
}

playGame();
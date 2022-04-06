//create function computerPlay to randomly return 'rock', 'paper', or 'scissors'.
//create function playerPlay to allow player to select 'rock', 'paper', or 'scissorcs
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const body = document.querySelector('body');
const resultsScreen = document.createElement('div');
const roundResult = document.createElement('p');
const setResult = document.createElement('p');
const currentScore = document.createElement('h1');

body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);
body.appendChild(resultsScreen);
resultsScreen.appendChild(currentScore);
resultsScreen.appendChild(roundResult);
resultsScreen.appendChild(setResult);

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

currentScore.textContent = `${playerScore} - ${computerScore}`;

const buttons = document.querySelectorAll('button');

buttonRock.innerText = ('Rock');
buttonPaper.innerText = ('Paper');
buttonScissors.innerText = ('Scissors');

let selectMove;

buttonRock.addEventListener('click', () => {
    selectMove = 'rock';
});
buttonPaper.addEventListener('click', () => {
    selectMove = 'paper';
});
buttonScissors.addEventListener('click', () => {
    selectMove = 'scissors';
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playRound();
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    game();
    });
});

function computerPlay() {
    const moves = ['rock', 'paper', 'scissors']
    const randomMove = moves[Math.floor(Math.random()*moves.length)];
    return randomMove;
}


//write function that plays a round of Rock Paper Scissors.
//create two parameters playerSelection and computerSelection.
//return string that declares the winner of the round.\
//make player's move case insensitive

function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay();
   playerSelection = selectMove;
   
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return roundResult.textContent = ('You lose!');
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {         
        return roundResult.textContent = ('You win!');
    } else if (playerSelection === computerSelection) {
        return roundResult.textContent = ('Its a tie!');
    } else return 'Invalid move. Pick rock, paper, or scissors.';
}

//create function to play a 5 round game
//record score after each round
//output result of each round
//announce winner of set
function game() {
    let result;

        switch(roundResult.textContent) {
          case 'You win!':
                  playerScore += 1;
                  roundsPlayed += 1;
                  console.log('You win!');
                  break;
          case 'You lose!':
                  computerScore += 1;
                  roundsPlayed += 1;
                  console.log('You lost!');
                  break;
          case 'Its a tie!':
                  computerScore += 1;
                  playerScore += 1;
                  roundsPlayed += 1;
                  console.log('Its a tie!');
                  break;
      }
    
    if (playerScore > computerScore && roundsPlayed === 5) {
        result = 'You won the set!';
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    } else if (playerScore < computerScore && roundsPlayed === 5) {
        result = 'You lost the set!';
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    } else if (playerScore === computerScore && roundsPlayed === 5) {
        result = 'The set was a tie.';
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    }

    currentScore.textContent = `${playerScore} - ${computerScore}`;

    return setResult.textContent = result;
}

//create function to computerPlay to randomly return 'Rock', 'Paper', or 'Scissors'.

const moves = ['rock', 'paper', 'scissors']
let selectMove;
let playerMove;

function computerPlay() {
    const randomMove = moves[Math.floor(Math.random()*moves.length)];
    return randomMove;
}

function playerPlay() {
    selectMove = prompt('Rock, paper, or scissors?', '');
    return playerMove = selectMove.toLowerCase();

}

//write function that plays a round of Rock Paper Scissors.
//create two parameters playerSelection and computerSelection.
//return string that declares the winner of the round.\
//make player's move case insensitive

function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay();
   playerSelection = playerPlay();
   
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'You lose!';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {         
        return 'You win!';
    } else if (playerSelection === computerSelection) {
        return 'Its a tie!';
    } else return 'Invalid move. Pick rock, paper, or scissors.';
}

//create function to play a 5 round game
//record score after each round
//output result of each round
//announce winner of set
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i= 0; i < 5; i++) {
      switch(playRound()) {
          case 'You win!':
              playerScore += 1;
              console.log('You win!');
              break;
            case 'You lose!':
                computerScore += 1;
                console.log('You lost!');
                break;
                case 'Its a tie!':
                    computerScore += 1;
                    playerScore += 1;
                    console.log('Its a tie!');
                    break;
    }
}
    if (playerScore > computerScore) {
        result = 'You won the set!';
    } else if (playerScore < computerScore) {
        result = 'You lost the set!';
    } else if (playerScore === computerScore) {
        result = 'The set was a tie.'
    }
    return result;
}
console.log(game());

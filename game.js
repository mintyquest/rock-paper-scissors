// This function returns either Rock, Paper, or Scissors as a string.
function computerPlay() {
    const moves = new Array('Rock', 'Paper', 'Scissors');
    let movePicker = Math.floor(Math.random() * 3);
    return moves[movePicker].toString();
}

const winners = document.querySelector('.results');

let playerWins = 0;
let computerWins = 0;
let winCount = 0;


//This function starts a round and pits the player's input and the computer's input against eachother.
function startRound(playerSelection, computerSelection) {

    let matchResult = document.createElement('p');

    if (winCount == 5){
        message = playerWins > computerWins ? 'Congratulations, Player. You have won the most rounds!' : 'Sorry, you have lost the game to the computer';
        matchResult.textContent = message;
        winners.appendChild(matchResult);
    }
    else if (winCount > 5) {
        return;
    }
    else if (playerSelection == 'Rock' && computerSelection === 'Paper') {
        
        matchResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        winners.appendChild(matchResult);
        computerWins++;
        winCount++;
        //return `You Lose! ${computerSelection} beats ${playerSelection}`; //was return `You Lose! ${computerSelection} beats ${playerSelection}`

    }
    else if (playerSelection == 'Rock' && computerSelection === 'Scissors') { 
        matchResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        winners.appendChild(matchResult);
        playerWins++;
        winCount++;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') { 
        matchResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        winners.appendChild(matchResult);
        playerWins++;
        winCount++;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') { 
        matchResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        winners.appendChild(matchResult);
        computerWins++;
        winCount++;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') { 
        matchResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        winners.appendChild(matchResult);
        computerWins++;
        winCount++;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') { 
        matchResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        winners.appendChild(matchResult);
        playerWins++;
        winCount++;
    }
    else if (playerSelection == computerSelection) {
        matchResult.textContent = 'Tis a tie maties! No one wins.';
        winners.appendChild(matchResult);
    }
    else {
        return 'Invalid entry detected';
        
    }

    
   
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(startRound(button.textContent, computerPlay())); //startRound('rock', computerPlay())
      });
});

/*This function runs five rounds of the game and logs each win/lose and the overall winner.
function game() {
    let winCount = 0;
    let loseCount = 0;

    for (let i = 0; i < 5; i++) {

        let playerMove = prompt('What is your move?', 'Please type your answer here').toLowerCase();
        let result = startRound(playerMove, computerPlay());
        console.log(result);
            if (result.includes('Win')) {
                ++winCount;
            }
            else {
                ++loseCount;
            }

    }
    if (winCount > loseCount) {
        console.log('Congrats! You won the most rounds!');
    }
    else {
        console.log('You lost most of the rounds. Better luck next time!');
    }
    
}*/
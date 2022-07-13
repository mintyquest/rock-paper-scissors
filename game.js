// This function returns either Rock, Paper, or Scissors as a string.
function computerPlay() {
    const moves = new Array('rock', 'paper', 'scissors');
    let movePicker = Math.floor(Math.random() * 3);
    return moves[movePicker].toString();
}

//This function starts a round and pits the player's input and the computer's input against eachother.
function startRound(playerSelection, computerSelection) {

    
    if (playerSelection == 'rock' && computerSelection === 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == 'rock' && computerSelection === 'scissors') { 
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') { 
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') { 
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') { 
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') { 
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == computerSelection) {
        return 'Tis a tie maties!';
    }
    else {
        return 'Invalid entry detected';
    }

    
   
}

//This function runs five rounds of the game and logs each win/lose and the overall winner.
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
    
}
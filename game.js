// This function returns either Rock, Paper, or Scissors as a string.
function computerPlay() {
    const moves = new Array('rock', 'paper', 'scissors');
    let movePicker = Math.floor(Math.random() * 3);
    return moves[movePicker].toString();
}

//Get player's move and pass into a variable
//Get computer's move and pass into a variable
//Compare player and computer's moves against eachother to see who has the better hand.
//Return the winner of the round in a string

let playerMove = prompt("What is your move?", "Please type your answer here").toLowerCase();

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

    
    //console.log(startRound(playerMove, computerPlay().toString()));
}
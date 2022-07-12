// This function returns either Rock, Paper, or Scissors as a string.
function computerPlay() {
    const moves = new Array('Rock', 'Paper', 'Scissors');
    let movePicker = Math.floor(Math.random() * 3);
    return moves[movePicker];
}

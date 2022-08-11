/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain number of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.getElementById('game');
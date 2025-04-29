
// Computer will return randomly and conditionally one of the multiple choices 
// ( between rock, paper and scissors )

// You will write a function that takes a user choice and returns it. 
// The function X will return one of the valid choices depending on what the user inputs

// You will write variables to keep track of the players score
// Create two variables in the global scope
// Initialize those variables with the value of 0

// Your game will be played round by round.
// You will write afunction that takes the human and computer player choices as arguments, plays a single round
// Increment the round winners score and logs a winner announcement





function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3) + 1 ;

    if (randomNum === 1) {
        console.log("Rock");
    }else if (randomNum === 2) {
        console.log("Paper");
    } else if (randomNum === 3) {
        console.log("Scissors");
    }
}

console.log(getComputerChoice());
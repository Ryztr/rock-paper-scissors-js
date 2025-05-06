//Function for computer output -> random choice 

function getComputerChoice(){
    let computerRand = Math.floor(Math.random() * 3) + 1;
    if (computerRand === 3) {
        return "rock";
    } else if (computerRand === 2) {
        return  "paper";
    } else if (computerRand === 1) {
        return "scissors";
    }
}

//Function for human input else if misspelled the 3 weapons return the input again // no score added /

function getHumanChoice() {
    let answer = prompt("Choose between rock, paper and scissors:").toLowerCase().trim();
    if (answer === "rock" || answer ==="paper" || answer === "scissors") {
    return answer;
    } else {
        return getHumanChoice();
    }
}

// Default score

let humanScore = 0;
let computerScore = 0;


//Function (game) of round by round logic. Added log output for every possibility. Added score increment +1 based on winnder.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`);
        // return humanScore +=1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore +=1;
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
         computerScore +=1;
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
         humanScore +=1;
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You win! Paper beats Scissors!");
         humanScore +=1;
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
         computerScore +=1;
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
         humanScore +=1;
        console.log( `Human: ${humanScore} | Computer: ${computerScore}`)
    }

}

//Declared variables that stores 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//You call multiple times with () because you want to runs the function and store return each time
//So everytime you call "getHumanChoice()" you call the function and prompt and everytime you input a word a new value is giving
//If you would've do humanSelection instead of the function then it would store the first result 5 times
//It would store the first result 5 time because humanSelection = stores return (1 time, so 1 prompt so 1 result) but calling it 5 times gives you the same log 5 time
//You could do this without the function playGame() but I know there is a better way, I don't know how to do it yet

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
  }
  
  playGame();


function score() {
    if (humanScore > computerScore) {
        console.log( `---> FINAL SCORE IS <---

Human: ${humanScore} | Computer: ${computerScore} 
            
Congratulations! You Won The Game!

^^^^^^^^^^^^^^^^^^^^^^^`)
    } else if (humanScore < computerScore){
        console.log( `---> FINAL SCORE IS <---

Human: ${humanScore} | Computer: ${computerScore} 
                        
Game Over! Computer Won!
            
^^^^^^^^^^^^^^^^^^^^^^^`)
    } else {
        console.log( `---> FINAL SCORE IS <---

Human: ${humanScore} | Computer: ${computerScore} 
                                    
Game Ended a Tie ! There Is No Winner!
                        
^^^^^^^^^^^^^^^^^^^^^^^`)
    }
}

score()

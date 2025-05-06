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

//Declared variables that store the computer and human choices functions return () // use the variables as arguments for playRound parameters.
//Being assigned to variables with () they get invoked so the functions run 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Also calling the playRound function, it runs the code, with the arguments as well.

playRound(humanSelection, computerSelection);

// ---> Tip for me to remember <---

//You call multiple times with () because you want to runs the function and store return each time
//So everytime you call "getHumanChoice()" you call the function and prompt and everytime you input a word a new value is giving
//If you would've do humanSelection instead of the function then it would store the first result 5 times
//It would store the first result 5 time because humanSelection = stores return (1 time, so 1 prompt so 1 result) but calling it 5 times gives you the same log 5 time
//You could do this without the function playGame() but I know there is a better way, I don't know how to do it yet
// -------------------------------------------------

//Defined a function that calls playRound 5 times so is like playing 5 rounds. Keeps track of score from the playRound() function
//Didn't understand the recursion concept yet and I googled hard for this part, seems that is pretty easy but hard to do it correctly which I know I didn't, hopefully updated soon as I get more knowledge..


function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
  }
  
  playGame();

//Added more text log with the final result after the 5 rounds for better understanding.

function score() {

    if (humanScore > computerScore) {
        console.log( `---> FINAL SCORE IS <---

Human: ${humanScore} | Computer: ${computerScore} 
            
Congratulations! You Won The Game!

^^^^^^^^^^^^^^^^^^^^^^^`);

    } else if (humanScore < computerScore){
        console.log( `---> FINAL SCORE IS <---

Human: ${humanScore} | Computer: ${computerScore} 
                        
Game Over! Computer Won!
            
^^^^^^^^^^^^^^^^^^^^^^^`);
    } else {
        console.log( `---> FINAL SCORE IS <---

Human: ${humanScore} | Computer: ${computerScore} 
                                    
Game Ended a Tie ! There Is No Winner!s
                        
^^^^^^^^^^^^^^^^^^^^^^^`);
    }
}

score();


//I have a bug where I get 6 inputs so there are 6 rounds instead of 5. That's because I invoked -- playRound(humanSelection, computerSelection) -- on line 74
//If I would delete it then the playRound() functions wouldn't get the arguments and the game would start and end on a Tie
//I will update hopefully soon and find a solution.
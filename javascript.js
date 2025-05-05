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


function getHumanChoice() {
    let answer = prompt("Choose between rock, paper and scissors:");
    if (answer === "rock") {
        return "rock";
    } else if (answer === "paper"){
        return "paper";
    } else if (answer === "scissors") {
        return "scissors";
    } else {
        return "Invalid Input!"
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log(humanSelection);
console.log(computerSelection);


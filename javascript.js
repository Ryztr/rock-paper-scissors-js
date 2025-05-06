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
    let answer = prompt("Choose between rock, paper and scissors:").toLowerCase().trim();
    if (answer === "rock" || answer ==="paper" || answer === "scissors") {
    return answer;
    } else {
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        // return humanScore +=1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        return humanScore +=1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        return computerScore +=1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        return humanScore +=1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You win! Paper beats Scissors!");
        return humanScore +=1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        return computerScore +=1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        return humanScore +=1;
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);

console.log(humanSelection);
console.log(computerSelection);

 
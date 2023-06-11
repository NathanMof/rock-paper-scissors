
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let result = getRandomInt(3);


const getComputerChoice = () => {
    switch (result) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}


let playerSelection = prompt("Enter Rock Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice(result);

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case computerSelection:
            return `It's a tie! You both picked ${playerSelection}`
        case "rock":
            if (computerSelection === "scissors") {
                return "You win! rock beats scissors"
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                return "You win! paper beats rock";
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                return "You win! scissors beaters paper";
            }
            break;
    }
    return `You lose! ${computerSelection} beats ${playerSelection}`
}
console.log(playRound(playerSelection, computerSelection));






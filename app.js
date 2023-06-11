
let score = 0


const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
}



const getComputerChoice = (result) => {
    switch (result) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}


const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case computerSelection:
            return `It's a tie! You both picked ${playerSelection}`
        case "rock":
            if (computerSelection === "scissors") {
                score++;
                return "You win! rock beats scissors"
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                score++;
                return "You win! paper beats rock";
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                score++;
                return "You win! scissors beats paper";
            }
            break;
    }
    return `You lose! ${computerSelection} beats ${playerSelection}`
}



const game = () => {
    for (let i = 0; i <= 4; i++) {
        let check = false
        let result = getRandomInt();
        const computerSelection = getComputerChoice(result);
        let playerSelection = null;
        while (!check) {
            playerSelection = prompt("Enter Rock Paper or Scissors").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                check = true
            } else alert("Wrong input please type \"rock\", \"paper\" or \"scissors\"")
        }
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Your final score is ${score}`);
}

game();





















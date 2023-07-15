const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}

function getPlayerChoice() {
    let choice = prompt("Choice of weapon?");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    if (!options.includes(choice)) {
        choice = getComputerChoice();
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors beat Paper.";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You win! Scissors beat Paper.";
        } else if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors.";
        }
    }
    
    return "It's a tie!";
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
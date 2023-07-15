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

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(playerSelection, computerSelection);

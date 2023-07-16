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
    const pointsGained = [0, 0];

    if ((playerSelection === "Rock" && computerSelection === "Scissors") 
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            pointsGained[0]++;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") 
    || (playerSelection === "Paper" && computerSelection === "Scissors")
    || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        pointsGained[1]++;
    }

    return pointsGained;
}

function getResultMessage(pointsGained, playerSelection, computerSelection) {
    let message = "";
    if (pointsGained[0] === 1) {
        message += "You win! ";
        playerSelection === "Scissors" ? message += `Scissors beat ${computerSelection}.` : message += `${playerSelection} beats ${computerSelection}.`;
    } else if (pointsGained[1] === 1) {
        message += "You lose! ";
        computerSelection === "Scissors" ? message += `Scissors beat ${playerSelection}.` : message += `${computerSelection} beats ${playerSelection}.`;
    } else {
        message = "It's a tie!";
    }

    return message;
}

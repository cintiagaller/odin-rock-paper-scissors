const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}

console.log(getComputerChoice());


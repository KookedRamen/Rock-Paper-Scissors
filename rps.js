
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()* choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a draw!"
    }else if (playerSelection.toLowerCase() === "rock" & computerSelection.toLowerCase() === "paper"){
        return "You lose, Paper covers Rock!"
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        return "You lose, Scissors cuts Paper!"
    }else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        return "You lose, Rock crushes Scissors!"
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        return "You win, Paper covers Rock!"
    }else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        return "You win, Rock crushes Scissors!"
    }else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        return "You win, Scissors cuts Paper!"
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt('Rock, Paper, Scissors?')
        computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()
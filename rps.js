
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()* choices.length)];
}

function getPlayerChoice(){
    const choice = btn.classList.value
    return choice
}
const result = document.querySelector('.result')
// const rock = document.querySelector('.rock')

let lCount = 0
let wCount = 0
const winCount = document.querySelector('.count')
winCount.textContent = `You have ${wCount} wins and ${lCount} losses.`

const button = document.querySelectorAll('.choice')

button.forEach(button => button.addEventListener('click', function(e){
    
    if (lCount < 5 && wCount < 5){
        let outcome = playRound(this.id, getComputerChoice())
        let loss = getLosses(outcome)
        let win = getWins(outcome)
        if (win == 1){
            wCount +=1

        }
        if (loss == 1){
            lCount += 1
        }
    
    console.log(lCount)
    result.textContent = `${outcome}`
    // const winCount = document.querySelector('.count')
    winCount.textContent = `You have ${wCount} wins and ${lCount} losses.`
    if (wCount >= 5){
        result.textContent = 'YOU WIN!'
        winCount.textContent = ''
    }else if (lCount >= 5){
        result.textContent = 'YOU LOSE!'
        winCount.textContent = ''
    }
}
} 
))




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

function getLosses(count){
    let found = `${count}`.includes('lose')
    if (found){ 
        return 1
    }    
}
function getWins(count){
    let found = `${count}`.includes('win')
    if (found){ 
        return 1
    }    
}
// const winCount = document.querySelector('.count')
// winCount.textContent = `You have ${wCount} wins and ${lCount} losses.`

// function game(){
//     for (let i = 0; i < 5; i++){
//         playerSelection = prompt('Rock, Paper, Scissors?')
//         computerSelection = getComputerChoice()
//         console.log(playRound(playerSelection, computerSelection))
//     }
// }

// game()
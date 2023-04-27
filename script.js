const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {



    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        let computerChoice = getComputersChoice()
        let gameRound = playRound(playerChoice, computerChoice)
        let totalScore = playerScore + computerScore

        if (totalScore == 5 && playerScore > computerScore) {
            results.innerHTML = 'Player Won!'
            player.innerHTML = `Player: ${playerScore}`
            computer.innerHTML = `Computer: ${computerScore}`
        }else if (totalScore == 5 && computerScore > playerScore){
            results.innerHTML = 'Computer Won!'
            computer.innerHTML = `Computer: ${computerScore}`
            player.innerHTML = `Player: ${playerScore}`
        }else if(computerScore == totalScore && playerScore == totalScore){
            results.innerHTML = 'Tied Game!'
        }else if (totalScore <= 5) {
            results.innerHTML = gameRound
            player.innerHTML = `Player: ${playerScore}`
            computer.innerHTML = `Computer: ${computerScore}`
        }





    })
})






function getComputersChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber <= 1) {
        return 'rock'
    } else if (randomNumber <= 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(input, computerSelection) {
    if (input === 'ROCK' && computerSelection === 'rock') {
        return 'Tied! Both Rock!'
    } else if (input === 'PAPER' && computerSelection === 'paper') {
        return 'Tied! Both Paper!'
    } else if (input === 'SCISSORS' && computerSelection === 'scissors') {
        return 'Tied! Both Scissors!'
    } else if (input === 'ROCK' && computerSelection === 'paper') {
        computerScore++
        return 'Computer Wins! Paper beats Rock!'
    } else if (input === 'ROCK' && computerSelection === 'scissors') {
        playerScore++
        return 'Player Wins! Rock beats Scissors!'
    } else if (input === 'PAPER' && computerSelection === 'rock') {
        playerScore++
        return 'Player Wins! Paper beats Rock!'
    } else if (input === 'PAPER' && computerSelection === 'scissors') {
        computerScore++
        return 'Computer Wins! Scissors beats Paper!'
    } else if (input === 'SCISSORS' && computerSelection === 'paper') {
        playerScore++
        return 'Player Wins! Scissors beats Paper!'
    } else if (input === 'SCISSORS' && computerSelection === 'rock') {
        computerScore++
        return 'Computer Wins! Rock beats Scissors!'
    }
}
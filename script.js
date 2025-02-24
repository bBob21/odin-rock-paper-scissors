// # computer picks
// # ask user to picks
// # compare result

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getHumanChoice(){
    let humanChoice = prompt("Choose one of the following:\n - rock\n - paper\n - scissors")
    console.log(humanChoice)
}

console.log(getComputerChoice())
console.log(getHumanChoice())
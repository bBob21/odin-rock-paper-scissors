// # computer picks
// # ask user to picks
// # compare result

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

console.log(getComputerChoice())
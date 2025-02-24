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
    let humanChoice = prompt("Choose one of the following:\n - rock\n - paper\n - scissors");
    return humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice){
    // Win lose funcs
    let humanWin = function (computerChoice, humanChoice) {
        humanScore++;
        console.log(`>> You win! ${humanChoice} beats ${computerChoice}`)
    }
    let computerWin = function (computerChoice, humanChoice) {
        computerScore++;
        console.log(`>> You lose! ${computerChoice} beats ${humanChoice}`)
    }

    // Game state
    console.log(`You played ${humanChoice}. Computer played ${computerChoice}.`);

    // Game logic
    if (computerChoice == humanChoice){
        console.log(">> It's a draw!");
    }
    else if (computerChoice == "rock"){
        if (humanChoice == "paper")
            humanWin(computerChoice, humanChoice);
        else if (humanChoice == "scissors")
            computerWin(computerChoice, humanChoice);
    }
    else if (computerChoice == "paper"){
        if (humanChoice == "rock")
            computerWin(computerChoice, humanChoice);
        else if (humanChoice == "scissors")
            humanWin(computerChoice, humanChoice);
    }
    else if (computerChoice == "scissors"){
        if (humanChoice == "rock")
            humanWin(computerChoice, humanChoice);
        if (humanChoice == "paper")
            computerWin(computerChoice, humanChoice);
    }

    console.log(`----- Score -----\nComputer: ${computerScore}\nHuman: ${humanScore}`)
}

playRound(getComputerChoice(), getHumanChoice());



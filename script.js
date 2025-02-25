function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(computerChoice, humanChoice){
    if (computerChoice == humanChoice){
        return "draw";
    }
    else if (computerChoice == "rock"){
        if (humanChoice == "paper")
            return "win";
        else if (humanChoice == "scissors")
            return "lose";
    }
    else if (computerChoice == "paper"){
        if (humanChoice == "rock")
            return "lose";
        else if (humanChoice == "scissors")
            return "win";
    }
    else if (computerChoice == "scissors"){
        if (humanChoice == "rock")
            return "win";
        if (humanChoice == "paper")
            return "lose";
    }
}

function checkWin(humanScore, computerScore){
    let text = ""
    if (humanScore == 5 || computerScore == 5){
        if (humanScore == 5)
            text = "Congratulations, you won!";
        else
            text = "Oh no, you lost!";
        
        // Create element if it doesn't already exist so mulitple lines aren't made
        // if user keeps playing past win condition
        if (document.querySelector(".winText") == null){
            const winText = document.createElement("p");
            winText.classList.add("winText")
            winText.textContent = text;
            document.querySelector("body").appendChild(winText);
        }
    }
}

// Game handler
let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.className;
        let computerChoice = getComputerChoice();

        document.querySelector(".humanChoice").textContent = humanChoice;
        document.querySelector(".computerChoice").textContent = computerChoice;

        let result = playRound(computerChoice, humanChoice);
        if (result == "win") {
            humanScore++;
            document.querySelector(".humanScore").textContent = humanScore;
        }
        else if (result == "lose"){
            computerScore++;
            document.querySelector(".computerScore").textContent = computerScore;
        }

        checkWin(humanScore, computerScore);
    });
});




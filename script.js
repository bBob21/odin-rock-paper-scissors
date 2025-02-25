function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(computerChoice, humanChoice){
    // Game state
    console.log(`  You played ${humanChoice}. Computer played ${computerChoice}.`);

    // Game logic
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


// console.log("=== Welcome to Rock Paper Scissors! Five rounds will be played. Start! ===");

// // Loop for multiple rounds
// let i = 0
// while (i < 5){
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();

//         // Start round
//         console.log(`--- Round ${i+1} ---`)
//         let roundState = playRound(computerChoice, humanChoice);

//         // Win or lose, update scores
//         if (roundState == "win") {
//             humanScore++;
//             console.log(`  >> You win! ${humanChoice} beats ${computerChoice}.`);
//         }
//         else if (roundState == "lose") {
//             computerScore++;
//             console.log(`  >> You lose! ${computerChoice} beats ${humanChoice}.`);
//         }
//         else if (roundState == "draw"){
//             console.log("  >> You drew! No one wins.");
//         }

//         console.log(`  Score:  Human: ${humanScore} - Computer: ${computerScore}`);
//         i++;
//     }

//     console.log(`Final Score! Human: ${humanScore} - Computer: ${computerScore}`);
// }


let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.className;
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
    });
});


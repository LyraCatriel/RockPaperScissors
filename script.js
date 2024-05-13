console.log("Let's play Rock/Paper/Scissors!");

/* 
valid moves are rock, paper, or scissors
number is random number between 0 and 2 (inclusive)
computer's move is number index of valid moves
*/
function getComputerChoice() {
    const validMoves = ["rock", "paper", "scissors"];
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    let num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    console.log("computer chose " + validMoves[num]);
    return num;
}

/*
Get user input ("Do you want to play rock, paper, or scissors?"), return input
*/
function getHumanChoice() {
    const validMoves = ["rock", "paper", "scissors"];
    let humanChoice = prompt("Do you want to play rock, paper, or scissors?");
    // if (humanChoice.toLowerCase() === "rock" || "paper" || "scissors")
    console.log("you chose " + humanChoice.toLowerCase());
    num = validMoves.indexOf(humanChoice.toLowerCase());
    
    return num; 
}

/*
rock is 0
paper is 1
scissors is 2
if (human - computer) mod 3 is 1, human wins
2 computer wins
otherwise tie
*/

function mod(n, m) {
  return ((n % m) + m) % m;
}

function playRound(humanChoice, computerChoice) {
    let winner = "No Winner"
    let result = (mod((humanChoice - computerChoice), 3));
    if (result === 1) {
        winner = "Human";
    }
    else if (result === 2) {
        winner = "Computer";
    }
    else {
        winner = "Tie";
    }
    return winner;
}

console.log(playRound(getHumanChoice(), getComputerChoice()) + " wins");

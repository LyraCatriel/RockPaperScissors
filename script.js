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
    // let winner = "";
    let result = (mod((humanChoice - computerChoice), 3));
    if (result === 1) {
        var winner = "Human";
    }
    else if (result === 2) {
        var winner = "Computer";
    }
    else {
        var winner = "Tie";
    }
    return winner;
}

/*
computer score = 0
player score = 0
loop 5 times:
    play round
    if winner is computer, add point to computer's score
    if winner is human, add point to human's score
    if winner is tie, add point to both scores
    if computer score > human score, computer wins
    else if computer score < human score, human wins
    else tie

*/
function playGame() {
    var scores = {"Computer": 0, "Human": 0, "Tie": 0};
    for (let i = 0; i < 5; i++) {
        roundWinner = playRound(getHumanChoice(), getComputerChoice());
        console.log(roundWinner + " wins round");
        scores[roundWinner] += 1;
    }
    console.log(scores);
    // console.log(Object.values(scores));
    // let topScores = Math.max(Object.values(scores["Computer"]), Object.values(scores["Human"]));
    // console.log(topScores);
    if (scores["Computer"] === scores["Human"])
    {
        console.log("Game Result: You Tied!")
    }
    else if (scores["Computer"] < scores["Human"]) {
        console.log("Game Result: You Win!")
    }
    else {
        console.log("Game Result: You Lose.")
    }
}

playGame();


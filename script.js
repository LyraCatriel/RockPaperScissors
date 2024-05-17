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
Get user input ("Do you want to play rock, paper, or scissors?")
if response is valid, return input
otherwise ask again until valid
*/
function getHumanChoice() {
    const validMoves = ["rock", "paper", "scissors"];
    let humanChoice
    let playPrompt = "Let's play rock paper scissors! Pick rock, paper, or scissors.";
    while (true) {
        humanChoice = prompt(playPrompt);
        if (validMoves.includes(humanChoice)) {
            console.log("you chose " + humanChoice);

            break;
        }
        else {
            playPrompt = "Not a valid response. Pick rock, paper, or scissors.";
        }
    }
    num = validMoves.indexOf(humanChoice.toLowerCase());

    return num; 
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

/*
rock is 0
paper is 1
scissors is 2
if (human - computer) mod 3 is 1, human wins
2 computer wins
otherwise tie
*/
function playRound(humanChoice, computerChoice) {

    let result = (mod((humanChoice - computerChoice), 3));
    if (result === 1) {
        var winner = "Human";
    }
    else if (result === 2) {
        var winner = "Computer";
    }
    else {
        var winner = "No One";
    }
    return winner;
}


/*
scores:
    human = 0
    computer = 0
    tie = 0
loop 5 times:
    play round
    add points to winner's score
    if computer score > human score, computer wins
    else if computer score < human score, human wins
    else tie
*/
function playGame(humanChoice) {
    const pItem = document.querySelector("p");
    // var scores = { "Computer": 0, "Human": 0, "No One": 0 };
    // for (let i = 0; i < 5; i++) {
    roundWinner = playRound(humanChoice, getComputerChoice());
    // console.log(roundWinner + " wins round");
    // scores[roundWinner] += 1;
    // }

    if(roundWinner == "Human") {
        HScore ++
    }
    else if(roundWinner == "Computer") {
        CScore ++
    }
    else {
        HScore ++
        CScore ++
    }
    pItem.textContent = "Your Score: " + HScore + " Computer Score: " + CScore;
    // if (scores["Computer"] === scores["Human"]) {
    //     return "Game Result: You Tied!"
    // }
    // else if (scores["Computer"] < scores["Human"]) {
    //     return "Game Result: You Win!"
    // }
    // else {
    //     return "Game Result: You Lose."
    // }
}

console.log("Let's play Rock/Paper/Scissors!");
// var winner = playGame();
// console.log(winner);\

var HScore = 0
var CScore = 0
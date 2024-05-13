console.log("Hello World");

/* 
Gets a random number between 0-2 (inclusive), depending on the number, returns one of the following string values: "rock", "paper", or "scissors"
*/
function getComputerChoice()
{
    const validMoves = ["rock", "paper", "scissors"];
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    let compMove = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return validMoves[compMove];
}

/*
Get user input ("Do you want to play rock, paper, or scissors?"), return input
*/
function getHumanChoice()
{
    let humanChoice = prompt("Do you want to play rock, paper, or scissors?");
    // if (humanChoice.toLowerCase() === "rock" || "paper" || "scissors")
    return humanChoice;
}


console.log(getComputerChoice());
console.log(getHumanChoice());
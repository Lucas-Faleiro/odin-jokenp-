let computerScore = 0;
let userScore = 0;

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let randomNumber = getRandomInt();
  // console.log(randomNumber);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, paper or scissors?");
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();
  console.log(`The computer chose ${computerChoice}`);

  if (humanChoice === computerChoice) {
    return console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    userScore += 1;
    console.log(`Human score: ${userScore}`);
    return "You Won! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    console.log(`Computer score: ${computerScore}`);
    return "You Lose! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    console.log(`Computer score: ${computerScore}`);
    return "You Lose! Scissors beats Paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    userScore += 1;
    console.log(`Human score: ${userScore}`);
    return "You Won! Paper beats Rock ";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    userScore += 1;
    console.log(`Human score: ${userScore}`);
    return "You Won! Scissors beat Paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    console.log(`Computer score: ${computerScore}`);
    return "You Lose! Rock beats Scissors";
  }
}

function playGame() {
  while (userScore != 3 || computerScore != 3) {
    playRound();
    if (userScore === 3) {
      return "You won the game! Congratulations!";
    } else if (computerScore === 3) {
      return "The computer won the game! Too bad";
    }
  }
}

console.log(playGame());

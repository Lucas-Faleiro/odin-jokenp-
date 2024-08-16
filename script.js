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
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore += 1;
    console.log(`Human score: ${userScore}`);
    return console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore += 1;
    console.log(`Computer score: ${computerScore}`);
    return console.log(`You Lost! ${computerChoice} beats ${humanChoice}`);
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

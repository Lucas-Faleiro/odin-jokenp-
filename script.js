let computerScore = 0;
let userScore = 0;

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let randomNumber = getRandomInt();
  console.log(randomNumber);
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

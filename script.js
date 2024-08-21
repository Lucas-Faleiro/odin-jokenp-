let computerScore = 0;
let userScore = 0;
const buttonsList = document.querySelectorAll("button");
const paraResult = document.querySelector("div");

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

// returns random computer choice to pass as variable to playRound function
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

console.log(buttonsList);

const playRound = buttonsList.forEach((button) => {
  button.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    console.log(`computer chooses: ${computerChoice}`);

    const humanChoice = button.innerText.toLowerCase();
    console.log(`human chooses: ${humanChoice}`);

    if (humanChoice === computerChoice) {
      const roundResult = document.createElement("p");
      roundResult.innerText = `It's a tie!`;
      paraResult.appendChild(roundResult);
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      userScore += 1;
      const roundResult = document.createElement("p");
      roundResult.innerText = `You Won! ${humanChoice} beats ${computerChoice}`;
      paraResult.appendChild(roundResult);
    }

    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore += 1;
      const roundResult = document.createElement("p");
      roundResult.innerText = `You Lost! ${computerChoice} beats ${humanChoice}`;
      paraResult.appendChild(roundResult);
    }
  });
});

// function playGame() {
//   while (userScore != 3 || computerScore != 3) {
//     playRound();
//     if (userScore === 3) {
//       return "You won the game! Congratulations!";
//     } else if (computerScore === 3) {
//       return "The computer won the game! Too bad";
//     }
//   }
// }

// console.log(playGame());

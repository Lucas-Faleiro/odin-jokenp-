let computerScore = 0;
let humanScore = 0;
const buttonsList = document.querySelectorAll("button");
const resultDiv = document.querySelector("div");
const scoreList = document.querySelectorAll(".score");
const roundResult = document.querySelector("#roundResult");
const computerChoicePara = document.querySelector("#computerChoice");

const getRandomInt = () => {
  return Math.floor(Math.random() * 3);
};

// returns random computer choice to pass as variable to playRound function
const getComputerChoice = () => {
  let randomNumber = getRandomInt();
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
};

const playRound = (e) => {
  const computerChoice = getComputerChoice();
  console.log(`computer chooses: ${computerChoice}`);
  computerChoicePara.innerText = `Computer Chooses: ${computerChoice}`;

  const humanChoice = e.target.innerText;
  console.log(`human chooses: ${humanChoice}`);

  if (humanChoice === computerChoice) {
    roundResult.innerText = `It's a tie!`;
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore += 1;
    scoreList[0].innerText = `Human Score: ${humanScore}`;
    roundResult.innerText = `You Won! ${humanChoice} beats ${computerChoice}`;
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore += 1;
    scoreList[1].innerText = `Computer Score: ${computerScore}`;
    roundResult.innerText = `You Lost! ${computerChoice} beats ${humanChoice}`;
  }
};

const playGame = () => {
  if (humanScore === 3 || computerScore === 3) {
    buttonsList.forEach((button) => {
      button.removeEventListener("click", playRound);
      button.removeEventListener("click", playGame);
    });
  }
  if (humanScore === 3) {
    const gameResult = document.createElement("p");
    gameResult.innerText = "You won the game! Congratulations!";
    resultDiv.appendChild(gameResult);
  } else if (computerScore === 3) {
    const gameResult = document.createElement("p");
    gameResult.innerText = "The computer won the game! Too bad";
    resultDiv.appendChild(gameResult);
  }
};

buttonsList.forEach((button) => {
  button.addEventListener("click", playRound);
});

//practicing for ... of
for (button of buttonsList) {
  button.addEventListener("click", playGame);
}

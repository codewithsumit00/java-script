let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
};

const playGame = (userChoice) => {
  const computerChoice = genComputerChoice();

  if (userChoice === computerChoice) {
    document.getElementById("msg").textContent = `Tie! ${userChoice} vs ${computerChoice}`;
    return;
  }

  // Winning rules
  const userWins =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper");

  if (userWins) {
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("msg").textContent = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    comScore++;
    document.getElementById("computer-score").textContent = comScore;
    document.getElementById("msg").textContent = `You lose! ${computerChoice} beats ${userChoice}`;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});


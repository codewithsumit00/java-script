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
    const msgEl = document.getElementById("msg");
    msgEl.textContent = `Tie! ${userChoice} vs ${computerChoice}`;
    // Draw: keep background as default (same as h1 color in CSS)
    msgEl.style.backgroundColor = "#081b31";
    msgEl.style.color = "white";
    return;
  }

  // Winning rules
  const userWins =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper");

  const msgEl = document.getElementById("msg");

  if (userWins) {
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    msgEl.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    msgEl.style.backgroundColor = "green";
  } else {
    comScore++;
    document.getElementById("computer-score").textContent = comScore;
    msgEl.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    msgEl.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});

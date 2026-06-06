let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // true -> X, false -> O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const showWinner = (winner) => {
  // Show only when a winning pattern is found
  msg.innerText = `Congratulations! ${winner} wins`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos1 === pos3) {
        showWinner(pos1);
        return;
      }
    }
  }
};

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  for (let box of boxes) {
    box.innerText = "";
    box.classList.remove("box-x");
    box.classList.remove("box-o");
  }
  msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      box.classList.add("box-x");
      box.classList.remove("box-o");
      turn0 = false;
    } else {
      box.innerText = "O";
      box.classList.add("box-o");
      box.classList.remove("box-x");
      turn0 = true;
    }


    box.disabled = true;
    checkWinner();
  });
});


resetBtn.addEventListener("click", resetGame);
if (newGamebtn) newGamebtn.addEventListener("click", resetGame);

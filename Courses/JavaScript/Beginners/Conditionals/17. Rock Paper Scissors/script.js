let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

let playerChoice = "";
let computerChoice = "";

if (player === 0) {
  playerChoice = "Rock";
} else if (player === 1) {
  playerChoice = "Paper";
} else {
  playerChoice = "Scissors";
}

if (computer === 0) {
  computerChoice = "Rock";
} else if (computer === 1) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}

console.log("Player chose: " + playerChoice);
console.log("Computer chose: " + computerChoice);

if (player === computer) {
  console.log("It's a draw!");
} else if (
  (player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}

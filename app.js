/*
window.onload = function() {

var userScore = 0;
var compScore = 0;
var userScore_span = document.querySelector("#user-score");
var compScore_span = document.querySelector("#comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p       = document.querySelector(".result > p");
var rock_div       = document.querySelector("#rock");
var paper_div      = document.querySelector("#paper");
var scissors_div   = document.querySelector("#scissors");


function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(word) {
  switch(word) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
  }
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(user);
  result_p.innerHTML       = convertWord(user) + smallUserWord + " beats " +
                             comp + smallCompWord + ". You win. 🔥";
  userChoice_div.classList.add("green-glow");
  setTimeout(function() {userChoice_div.classList.remove("green-glow");}, 800);
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(user);
  result_p.innerHTML       = convertWord(user) + smallUserWord + " loses to " +
                             comp + smallCompWord + ". You lost. 💩";
  userChoice_div.classList.add("red-glow");
  setTimeout(function() {userChoice_div.classList.remove("red-glow");}, 800);
}

function draw(user, comp) {
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(user);
  result_p.innerHTML       = convertWord(user) + smallUserWord + " draws with " +
                             comp + smallCompWord + ".";
  userChoice_div.classList.add("gray-glow");
  setTimeout(function() {userChoice_div.classList.remove("gray-glow");}, 800);
}

function game(userChoice) {
  var compChoice = getComputerChoice();
  switch(userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, compChoice);
      break;
  }
}



function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });

  paper_div.addEventListener("click", function() {
    game("paper");
  });

  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
}

main();

};

*/

const unerScore=0;
const computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

rock_div.addEventListener('click', function(){
    game("r")
})
paper_div.addEventListener('click', function(){
    game("p")
})
scissors_div.addEventListener('click', function(){
    game("s")
})

    
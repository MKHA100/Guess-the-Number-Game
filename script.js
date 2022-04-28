"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 5;

const message = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const number = document.querySelector(".number");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");

document.querySelector(".guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").click();
  }
});

document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  console.log(input);

  // When the input is blank
  if (!input) {
    message.textContent = "⛔ No Number!";
    score--;
    scoreText.textContent = score;

    // When the player Wins
  } else if (score > 0) {
    if (input === randomNumber) {
      message.textContent = `🎉 ${input} is Correct Number!`;
      scoreText.textContent = score;
      number.textContent = randomNumber;

      body.style.backgroundColor = "#60b347";
      number.style.width = "30rem";
      document.querySelector(".guess").setAttribute("disabled", "");
      document.querySelector(".check").disabled = true;

      // HighScore
      if (highscore.textContent === 0) {
        highscore.textContent = score;
      } else if (score > highscore.textContent) {
        highscore.textContent = score;

        // When the guess is too high
      }
    } else {
      message.textContent =
        input > randomNumber
          ? `📈 ${input} is too high!`
          : `📉 ${input} is too low!`;
      score--;
      scoreText.textContent = score;
      document.querySelector(".guess").value = "";
    }

    // When the player loses
  } else {
    messagentent = "💥 You lost the game!";
    scoreText.textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);

  message.textContent = "Start guessing...";
  scoreText.textContent = score;
  number.textContent = "?";
  document.querySelector(".guess").value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  document.querySelector(".guess").removeAttribute("disabled");
  document.querySelector(".check").disabled = false;
});

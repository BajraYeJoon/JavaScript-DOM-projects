//Intialize the variables

let min = 1,
  max = 10,
  leftGuess = 3,
  winNum = getRanNum(min,max);


function getRanNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min)
  
}

//import all the id

const guesser = document.querySelector("#input-field"),
  minNum = document.querySelector(".min-number"),
  maxNum = document.querySelector(".max-number"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#input-guess"),
  message = document.querySelector(".message");

//Assign the min and max number
minNum.textContent = min;
maxNum.textContent = max;

//For the play again event
guesser.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }

});

guessBtn.addEventListener("click", (e) => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winNum) {
    gameOver(true, `You got it right!!🌟🎉`);
  } else {
    leftGuess -= 1;

    if (leftGuess === 0) {
      gameOver(false, `You lost, the right number was ${winNum}`);
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(
        `${guess} is not correct, you have ${leftGuess} guesses left`,
        "red"
      );
    }
  }

  function gameOver(won, msg) {
    let color;
    won === true ? (color = "green") : (color = "red");

    guessInput.disabled = true;
    message.style.color = color;
    guessInput.style.borderColor = color;

    setMessage(msg);

    //Play again

    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
  }

  function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
  }
});

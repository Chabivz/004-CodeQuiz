var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionDiv = document.querySelector("#question");
var answer = document.querySelector(".answer");
var main = document.querySelector("main");
var questionBox = document.querySelector("questionBox");

// Creating Elements
var answerol = document.createElement("ol");
var answerl1 = document.createElement("button");
var answerl2 = document.createElement("button");
var answerl3 = document.createElement("button");
var answerl4 = document.createElement("button");

// Adding elements in their parent/child
document.body.appendChild(answerol);
answerol.appendChild(answerl1);
answerol.appendChild(answerl2);
answerol.appendChild(answerl3);
answerol.appendChild(answerl4);

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = [
  "variable",
  "array",
  "modulus",
  "object",
  "function",
  "string",
  "boolean",
];
var questionID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var questionList = [
  "A binary variable, having two possible values called true and false.",
  "It is a storage location paired with an associated symbolic name, which contains some know or unknown quantity of information referred to as a value.",
  "Question3",
  "Question4",
  "Question5",
];
var anwerList = ["Boolean", "Variable", "Answer3", "Answer4", "Answer5"];

// The init function is called when the page loads
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  startButton.hidden = true;
  wordBlank.hidden = true;
  isWin = false;
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  questionsList();
  renderBlanks();
  startTimer();
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++;
  startButton.disabled = false;
  setWins();
}

// The loseGame function is called when timer reaches 0
function gameOver() {
  wordBlank.hidden = false;
  wordBlank.textContent = "GAME OVER";
  loseCounter++;
  startButton.disabled = false;
  setLosses();
}

//
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
      questionDiv.hidden = true;
    }
  }, 1000);
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = [];
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  // wordBlank.textContent = blanksLetters.join(" ")
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(
    ""
  );
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed);
    checkWin();
  }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  //
  startButton.hidden = false;
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins();
  setLosses();
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

function questionsList() {
  console.log(questionList);
  questionDiv.textContent = questionList[0];
  // Create Buttons
  // Creating Elements
  answerl1.textContent = "<button value='button'>"+ anwerList[0] +"</button>"

}

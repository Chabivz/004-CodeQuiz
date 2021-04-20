// Establishing connection
var i = "Connection";
console.log(i);

// Variables HTML
var timerLi = document.querySelector("#timerLi");
var gameRulesDiv = document.querySelector(".gameRules");
var startBtn = document.querySelector(".start-button");
var questionDiv = document.querySelector("#question");
var answerDivA = document.querySelector("#A");
var answerDivB = document.querySelector("#B");
var answerDivC = document.querySelector("#C");
var answerDivD = document.querySelector("#D");
var questionContainer = document.querySelector(".queSection");
var questionResult = document.querySelector("#questionResult");
var score = 0;
var endQuizEl = document.querySelector("#endQuiz");
var initialSubmitEl = document.querySelector("#initialSubmit");
let scoreListEl = document.querySelector('#scoreList'); 
let finalScoreEl = document.querySelector('#finalScore');
let retakeBtnEl = document.querySelector('#retakeBtn');



// Timer Variables 


var timer;
var count;
var timerCount = 30;
// Question Variables 
var questionBank = [
    {
        question: "What Does HTML stands for?", 
        answerA: "Hey Too Much Layout",
        answerB: "Hey That's My Lunch",
        answerC: "Hypertext Markup Language",
        answerD: "How To Make Lasagne",
        correct: "C"
    },
    {
        question: "What does CSS stands for?",
        answerA: "Containment Spray System",
        answerB: "Cascading Style Sheets",
        answerC: "Content Scrambling System",
        answerD: "Cross-Site Scripting",
        correct: "B",
    },
    {
        question: "It is a client-side scripting language inserted into HTML pages and is understood by web browsers.",
        answerA: "Java",
        answerB: "CSS",
        answerC: "JavaScript",
        answerD: "C++",
        correct: "C"
    },
    {
        question: "On the list, what is not a JavaScript Data Type",
        answerA: "Number",
        answerB: "String",
        answerC: "Undefined",
        answerD: "Float",
        correct: "D"
    },
    {
        question: "It is a keyword referes to the object from where it was called",
        answerA: "this",
        answerB: "that",
        answerC: "they",
        answerD: "them",
        correct: "A"
    },
    {
        question: "What is undefined value in JavaScript?",
        answerA: "Variable used in the code does't exist",
        answerB: "Variable is not assignt to any value",
        answerC: "Property does not exist.",
        answerD: "All of the above",
        correct: "D"
    },
    {
        question: "How do we make a rounded corner by using CSS?",
        answerA: "border-radius",
        answerB: "radius-border",
        answerC: "radius",
        answerD: "border",
        correct: "A"
    },
    {
        question: "Which of the following property serves as shorthand for the padding properties?",
        answerA: "padding",
        answerB: "padding-top",
        answerC: "padding-left",
        answerD: "padding-right",
        correct: "A"
    }

];
// Taking out the last element on array for the password function.
var questionBankIndex = questionBank.length - 1;
// Question Generator Function
var questionCounter = 0;

console.log(questionBankIndex);
// console.log(questionBank.question);

// Starting the game when the btn is clicked
startBtn.addEventListener("click", startGame);

function startGame() {
    questionCounter = 0;
    console.log("Game Started");
    gameRulesDiv.style.display = "none";
    startBtn.style.display = "none";
    questionContainer.style.display = "block";
    scoreListEl.style.display = "none";
    endQuizEl.style.display = "none";
    // start timer by calling timer function
    timerCount = 30;
    questionCounter = 0;
    startTimer();
    
    
}


// Question and Selection will be shown once the button is clicked.

function generateQuestions() {
    var q = questionBank[questionCounter];
    questionDiv.textContent = q.question;
    answerDivA.textContent = q.answerA;
    answerDivB.textContent = q.answerB;
    answerDivC.textContent = q.answerC;
    answerDivD.textContent = q.answerD;
}

generateQuestions();

function answerIsCorrect() {
    // questionResult.textContent = "Correct"
}

function answerIsWrong() {
    questionResult.textContent = "Wrong";
}

// answerIsWrong();
// answerIsCorrect();

function checkAnswer(answer) {
    if ( questionBank[questionCounter].correct == answer ) {
        score++;        
        answerIsCorrect()

    } else {
        answerIsWrong();
        // timer penalty
        timerCount = timerCount - 5;
    }
    // if there are still questions needed to be answered go to the next one, Else get initials and display score score.
    if ( questionCounter < questionBankIndex ) {
        // if timer is still going, go to the next question.
        questionCounter++;
        generateQuestions();
    } else {

        endQuiz()
        // Reset the ti
        // var initials = window.prompt("What is your initial");
        // window.confirm("Hi " + initials + ", your score is " +score);
        // gameRulesDiv.style.display = "block";
        // startBtn.style.display = "block";
        // questionContainer.style.display = "none";
        
    }
}


// Timer Function 
function startTimer() {
    timer = setInterval(clockTick, 1000);

}


function clockTick() {
    timerCount--;
    timerLi.textContent = (" Time Remaining: " + timerCount);
    if ( timerCount <= 0 )  {
        // end quiz function
        endQuiz();
    } 


}

function endQuiz() {

    clearInterval(timer);
    endQuizEl.style.display = "block";
    questionContainer.style.display = "none";
    finalScoreEl.textContent = score;


}


function saveHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let initialsEl = document.querySelector("#initialTxt");
    let newScore = {
        score: score,
        initials: initialsEl.value.trim()
    };
    highScores.push(newScore);
    localStorage.setItem('highScores',JSON.stringify(highScores));
    // 
    // scoresection
    scoreListEl.style.display = "block";
    // scoreBoard();
}

initialSubmitEl.onclick = saveHighScores;
retakeBtnEl.onclick = startGame;

// function scoreBoard() {
//     let scoreDB = JSON.stringify(newScore);
//     let myObj = "";
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4)
//         let myObj = json.parse
//     }

//     for (var x = 0 ; x <= newScore.length ; x++) {

//     }
// }
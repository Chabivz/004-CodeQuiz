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

// Timer Variables 
var quizTimer = 60;
var timer;
var count;
var timerCount;
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
    }
];
// Taking out the last element on array for the password function.
var questionBankLast = questionBank.length - 1;
// Question Generator Function
var questionCounter = 0;

// console.log(questionBankLast);
// console.log(questionBank.question);

// Starting the game when the btn is clicked
startBtn.addEventListener("click", startGame);

function startGame() {
    console.log("Game Started");
    gameRulesDiv.style.display = "none";
    startBtn.style.display = "none";
    questionContainer.style.display = "block";
    
}


// Timer Function 
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
       timerLi.textConent = timerCount;
       if (timerCount >= 0 ) {
        // Test if user got the answer wrong
       }
    })
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
    questionResult.textContent = "Correct"
}

function answerIsWrong() {
    questionResult.textContent = "Wrong";
}

// answerIsWrong();
answerIsCorrect();
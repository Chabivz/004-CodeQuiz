// Establishing connection
console.log("Connection");
var i = "connection";
console.log(i);


var gameRulesDiv = document.querySelectorAll(".gameRules");
var startBtn = document.querySelectorAll(".start-button");



function startGame(event) {
    console.log("Game Started");
    startBtn.hidden = true;
    gameRulesDiv.hidden = true;

}

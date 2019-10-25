//Set variables - chooses random numbers for stones clicked and the score to match
var reality = Math.floor(Math.random() * 11) + 1;
var space = Math.floor(Math.random() * 11) + 1;
var power = Math.floor(Math.random() * 11) + 1;
var mind = Math.floor(Math.random() * 11) + 1;
var time = Math.floor(Math.random() * 11) + 1;
var soul = Math.floor(Math.random() * 11) + 1;
var wins = 0;
var losses = 0;
var randomNumber = Math.floor(Math.random() * 101) + 19;
var yourNumber = 0;

//Function to choose number
function numberGenerator() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").html(randomNumber);
}

numberGenerator();

//On-click functions for stones
$("#reality-stone").on("click", function () {
    yourNumber = yourNumber + reality;
    $("#your-number").text(yourNumber);
    endGame();
    
});

$("#space-stone").on("click", function () {
    yourNumber = yourNumber + space;
    $("#your-number").text(yourNumber);
    endGame();
})

$("#power-stone").on("click", function () {
    yourNumber = yourNumber + power;
    $("#your-number").text(yourNumber);
    endGame();
})

$("#mind-stone").on("click", function () {
    yourNumber = yourNumber + mind;
    $("#your-number").text(yourNumber);
    endGame();
})

$("#time-stone").on("click", function () {
    yourNumber = yourNumber + time;
    $("#your-number").text(yourNumber);
    endGame();
})

$("#soul-stone").on("click", function () {
    yourNumber = yourNumber + mind;
    $("#your-number").text(yourNumber);
    endGame();
})



//When the game is won/lost
function endGame() {
if (yourNumber === randomNumber) {
    wins ++;
    $("#win-count").text(wins);
    reset()
}

else if (yourNumber > randomNumber) {
    losses++;
    $("#loss-count").text(losses);
    reset();
    
}};

//Functions
function reset () {
    yourNumber = 0;
    $("#your-number").text(yourNumber);
    numberGenerator();
}



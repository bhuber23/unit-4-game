//Set variables - chooses random numbers for stones clicked and the score to match
var reality = Math.floor(Math.random() * 11) + 1;
var space = Math.floor(Math.random() * 11) + 1;
var power = Math.floor(Math.random() * 11) + 1;
var mind = Math.floor(Math.random() * 11) + 1;
var wins = 0;
var losses = 0;
var randomNumber = Math.floor(Math.random() * 101) + 19;
var yourNumber = 0;

//On-click functions for stones
$("#reality-stone").on("click", function () {
    yourNumber = yourNumber + reality;
    $("#score").text(yourNumber);
    
});

$("#space-stone").on("click", function () {
    yourNumber = yourNumber + space;
    $("#score").text(yourNumber);
})

$("#power-stone").on("click", function () {
    yourNumber = yourNumber + power;
    $("#score").text(yourNumber);
})

$("#mind-stone").on("click", function () {
    yourNumber = yourNumber + mind;
    $("#score").text(yourNumber);
})

//To keep score
$("#random-number").html(randomNumber);

if (yourNumber === randomNumber) {
    wins ++;
    $("#win-count").text(wins);
}
else if (yourNumber > randomNumber) {
    losses++;
    $("#loss-count").text(losses);
    
}


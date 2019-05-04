$(document).ready(function() {

//selects a random number from 19-120 at start of game
var random = Math.floor(Math.random()*101+19);

//giving a random number as the target
$("#targetScore").text(random);

//giving a random value 1-12 to each egg
var num1 = Math.floor(Math.random()*11+1);
var num2 = Math.floor(Math.random()*11+1);
var num3 = Math.floor(Math.random()*11+1);
var num4 = Math.floor(Math.random()*11+1);


//vars for scoreboard
var userScore = 0;
var Numwins = 0;
var Numlosses = 0;

$("#wins").text(Numwins);
$("#losses").text(Numlosses);

function reset(){
    random = Math.floor(Math.random()*101+19);
    console.log(random);
    $("#targetScore").text(random);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    userScore = 0;
    $("#yourScore").text(userScore);
}

function winner() {
    alert("You win!");
    Numwins++;
    $("#wins").text(Numwins);
    reset();
}

function loser() {
    alert("You lose!");
    Numlosses++;
    $("#losses").text(Numlosses);
    reset();
}

$("#belle").on("click", function() {
    userScore = userScore + num1;
    console.log("New score= " + userScore);
    $("#yourScore").text(userScore);

    if (userScore === random) {
        winner()
    }

    else if (userScore > random) {
        loser()
    }
})

$("#ariel").on("click", function() {
    userScore = userScore + num2;
    console.log("New score= " + userScore);
    $("#yourScore").text(userScore);

    if (userScore === random) {
        winner()
    }

    else if (userScore > random) {
        loser()
    }
})

$("#aurora").on("click", function() {
    userScore = userScore + num3;
    console.log("New score= " + userScore);
    $("#yourScore").text(userScore);

    if (userScore === random) {
        winner()
    }

    else if (userScore > random) {
        loser()
    }
})

$("#cinderella").on("click", function() {
    userScore = userScore + num4;
    console.log("New score= " + userScore);
    $("#yourScore").text(userScore);

    if (userScore === random) {
        winner()
    }

    else if (userScore > random) {
        loser()
    }
})

});
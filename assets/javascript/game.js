var crystalPics = [
    "https://findicons.com/files/icons/2699/free_crystal_icons/128/emerald.png",
    "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/128/Zircon.png",
    "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/128/Citrine.png",
    "http://files.softicons.com/download/object-icons/desktop-crystal-icons-by-aha-soft/png/128x128/Amethyst.png"
];
var wins = 0;
var losses = 0;
var currentScore = 0;
var randNumToGuess = randNum(19, 120);

$(document).ready(function() {
    $("#displayRandNum").text(`Number to guess: ${randNumToGuess}`);
    $("#displayScoreBoard").html(`Wins: ${wins}<br />Losses: ${losses}`);
    createCrystals();
    $(".crystal").on("click", function() {
        currentScore += parseInt($(this).attr("data-randNum"));
        if (currentScore === randNumToGuess) {
            wins++;
            resetGame();
            updateDisplay();
            updateCrystals();
        }
        if (currentScore > randNumToGuess) {
            losses++;
            resetGame();
            updateDisplay();
            updateCrystals();
        }
        $("#displayTotalScore").html(`Your current score:${currentScore}`);
    });
});

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCrystals() {
    $("#displayCrystals").empty();
    for (var i = 0; i < 4; i++) {
        var crystal = $("<span>").
            attr({
                "data-randNum": randNum(1, 12),
                "id": i
            }).
            addClass("crystal");
        crystal.append($("<img>").attr("src", crystalPics[i]));
        $("#displayCrystals").append(crystal);
        $("#displayTotalScore").html(`Your current score:${currentScore}`);
    }
}

function updateCrystals() {
    for (var i = 0; i < 4; i++) {
        $(`#${i}`).attr("data-randNum", randNum(1, 12));
    }
}

function updateDisplay() {
    $("#displayScoreBoard").html(`Wins: ${wins}<br />Losses: ${losses}`);
    $("#displayRandNum").text(`Number to guess: ${randNumToGuess}`);
}

function resetGame() {
    currentScore = 0;
    randNumToGuess = randNum(19, 120);
}
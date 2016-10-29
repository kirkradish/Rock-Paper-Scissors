var userSel = document.getElementById('user-selection');
var computerSel = document.getElementById('computer-selection');
var userScore = document.getElementById("user-score");
var userScoreNum = Number(userScore.innerHTML);
var computerScore = document.getElementById("computer-score");
var computerScoreNum = Number(computerScore.innerHTML);
var matchOutcome = document.getElementById("match-outcome");
var selection = document.getElementById("selection");
var weaponChoices = [];

// RANDOMLY PICK COMPUTER WEAPON
function compSelect() {
    var randFloat = Math.random() * 3;
    var randNum = Math.ceil(randFloat);
    var compWeapon;
    switch(randNum) {
        case 1:
            compWeapon = "rock";
            break;
        case 2:
            compWeapon = "paper";
            break;
        case 3:
            compWeapon = "scissors";
            break;
    }
    return compWeapon;
}

// ALL POSSIBLE WINNERS
function outcome(weapons) {
    if (weapons.indexOf("rock") > -1 && weapons.indexOf("scissors") > -1) { return "rock"; }
    if (weapons.indexOf("paper") > -1 && weapons.indexOf("rock") > -1) { return "paper"; }
    if (weapons.indexOf("scissors") > -1 && weapons.indexOf("paper") > -1) { return "scissors"; }
    if (weapons.indexOf("rock") > -1) { return "tie"; }
    if (weapons.indexOf("paper") > -1) { return "tie"; }
    if (weapons.indexOf("scissors") > -1) { return "tie"; }
}

// DETERMINE WINNER BY CHECKING USER'S WEAPON
function declareWinner(winner, user) {
    if (winner == "tie") {
        matchOutcome.innerHTML = "Tie Game";
    }
    switch(winner) {
        case "rock":
            if (user == "rock") {
                matchOutcome.innerHTML = "User Wins";
            }
            else {
                matchOutcome.innerHTML = "Computer Wins";
            }
            break;
        case "paper":
            if (user == "paper") {
                matchOutcome.innerHTML = "User Wins";
            } else {
                matchOutcome.innerHTML = "Computer Wins";
            }
            break;
        case "scissors":
            if (user == "scissors") {
                matchOutcome.innerHTML = "User Wins";
            } else {
                matchOutcome.innerHTML = "Computer Wins";
            }
    }
    if (matchOutcome.innerHTML == "User Wins") {
        userScore.innerHTML = userScoreNum += 1;
    }
    else if (matchOutcome.innerHTML == "Computer Wins") {
        computerScore.innerHTML = computerScoreNum += 1;
    }
}
selection.addEventListener("click", function(e) {
    matchOutcome.innerHTML = "";
    if (e.target && e.target.nodeName == "LI") {
        selection.style.pointerEvents = "none";
        var userWeapon = e.target.id;
        var favored;

        // STORE SELECTIONS IN ARRAY
        // POST TO SCOREBOARD
        weaponChoices.unshift(userWeapon, compSelect());
        userSel.setAttribute("src", "img/user-" + weaponChoices[0] + ".png");
        computerSel.setAttribute("src", "img/comp-" + weaponChoices[1] + ".png");

        // CHECK POSSIBLE WINS
        favored = outcome(weaponChoices);
        declareWinner(favored, userWeapon);

        selection.style.pointerEvents = "auto";
        weaponChoices = [];
    }
});

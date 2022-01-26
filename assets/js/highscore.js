var scoreboard = document.querySelector(".card-scores"); // On HTML2 for Highscore Scoreboard
var scoreList = document.querySelector("#score-list");
//var listOfHS = document.querySelector("#score-initials")

var clearHighscores = document.querySelector(".clear-scores")

function getHighscores() {
    console.log("Get highscores!!!");
    var highscores = JSON.parse(localStorage.getItem("quizScores"))
    console.log(highscores.length);

   // for ( var i = 0; i < highscores.length; i++) {
        var everyHighscore = document.createElement("p")
        everyHighscore.innerHTML = highscores.initials + "-" + highscores.score;
        scoreList.appendChild(everyHighscore);
        console.log(everyHighscore);
   // }

}
getHighscores();


function hide(element) {
    element.style.display = "none";
}

clearHighscores.addEventListener("click", function() {

    window.localStorage.removeItem("quizScores");
    hide(scoreList);

});
// JavaScript file for the highscore html(index2.html)
// Defining the variables 
var scoreboard = document.querySelector(".card-scores"); // On HTML2 for Highscore Scoreboard
var scoreList = document.querySelector("#score-list");
var clearHighscores = document.querySelector(".clear-scores")




// function getHighscores() {
//     console.log("Get highscores!!!");
//     var highscores = JSON.parse(localStorage.getItem("quizScores"))
//     console.log(highscores.length);

//    // for ( var i = 0; i < highscores.length; i++) {
//         var everyHighscore = document.createElement("p")
//         everyHighscore.innerHTML = highscores.initials + "-" + highscores.score;
//         scoreList.appendChild(everyHighscore);
//         console.log(everyHighscore);
//    // }

// }
// getHighscores();




// To grab the scores from the local storage 
function getHighscores() {
    console.log("Get highscores!!!");
    var quizScores = JSON.parse(localStorage.getItem("quizScores"))
    

    for ( var i = 0; i < quizScores.length; i++) {
        var newScore = document.createElement("p")
        newScore.textContent = quizScores[i].initials + " - " + quizScores[i].score + " points";
        console.log(quizScores[i])
        scoreList.appendChild(newScore);
        //console.log(quizScores);
    }

}
getHighscores();

// Function to hide items 
function hide(element) {
    element.style.display = "none";
}

// When highscore is clicked then local storage and highscore on the page goes away
clearHighscores.addEventListener("click", function() {
    window.localStorage.removeItem("quizScores");
    hide(scoreList);
});
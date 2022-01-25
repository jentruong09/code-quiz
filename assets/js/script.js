// Defining variables
var startButton = document.querySelector(".start-button")
var bodySection = document.querySelector(".card-body")
var scoreLink = document.querySelector(".scoreboard")
var scoreDisplay = document.querySelector(".score")

var timerStart = document.querySelector("#time-left")

var questionSection = document.querySelector(".question-section")
var aChoice = document.querySelector(".answer-one")
var bChoice = document.querySelector(".answer-two")
var cChoice = document.querySelector(".answer-three")
var dChoice = document.querySelector(".answer-four")


// Function to hide and show items
function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

//Question sheet 
var differentQuestions = [
    {
        question: "What does the following show?  var drinks = ['pepsi', 'sunkist', 'monster', 'red bull']",
        choices: ["a. a value", "b. an object", "c. an array", "d. a set"],
        correct: "c. an array"
    },
    {
        question: "What would you do to change the color of the background of your web application to black in css?",
        choices: ["a. color: black", "b. background-color: black", "c. background.color: black", "d. color.background: black"],
        correct: "b. background-color: black"
    }

]

function startNewQuiz() {
    hide(startButton);
    hide(bodySection)
    show(scoreDisplay);
    show(timerStart);
    startQuiz()


}

// Making the Start Quiz button do the same thing as the next quiz button - which will give a new question 
function startQuiz() {
    nextQuestion();
}

function nextQuestion() {
    var questionList = 0;
    questionSection.textContent = differentQuestions[questionList].question;
    aChoice.textContent = differentQuestions[questionList].choices[0]; //where each choice is located in the index
    bChoice.textContent = differentQuestions[questionList].choices[1];
    cChoice.textContent = differentQuestions[questionList].choices[2];
    dChoice.textContent = differentQuestions[questionList].choices[3];
} 

//Appendchild

// Not working, look into this
var finalScore;
function scoreDisplay() {
    var score = 0;
    finalScore.textContent = score + " points"
}







startButton.addEventListener("click", startNewQuiz)
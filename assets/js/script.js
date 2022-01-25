// Defining variables
var startButton = document.querySelector(".start-button")
var bodySection = document.querySelector(".card-body")
var scoreLink = document.querySelector(".scoreboard")
var scoreDisplay = document.querySelector(".score")

var questionSection = document.querySelector(".question-section")
var aChoice = document.querySelector(".answer-one")
var bChoice = document.querySelector(".answer-two")
var cChoice = document.querySelector(".answer-three")
var dChoice = document.querySelector(".answer-four")

var displayMessage = document.querySelector(".message-display")

var timerStart = document.querySelector("#time-left")

var score = 0;
var questionList = 0;



//Question sheet 
var differentQuestions = [
    {
        question: "What does the following show?  var drinks = ['pepsi', 'sunkist', 'monster', 'red bull']",
        choices: ["a. a value", "b. an object", "c. an array", "d. a set"],
        correct: "c. array"
    },
    {
        question: "What would you do to change the color of the background of your web application to black in css?",
        choices: ["a. color: black", "b. background-color: black", "c. background.color: black", "d. color.background: black"],
        correct: "b. background-color: black"
    }

]


// Making the Start Quiz button do the same thing as the next quiz button - which will give a new question 
function startQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionSection.textContent = differentQuestions[questionList].question;
    aChoice.textContent = differentQuestions[questionList].choices[0]; //where each choice is located in the index
    bChoice.textContent = differentQuestions[questionList].choices[1];
    cChoice.textContent = differentQuestions[questionList].choices[2];
    dChoice.textContent = differentQuestions[questionList].choices[3];
} 


// Starting the timer once the quiz is started
//function startTimer() {
    //var secondsLeft = 60;
    //var timeInterval = setInterval(function() {
        //secondsLeft--;
        //timerStart.textContent = "Timer: " + secondsLeft + " second(s) left";

        //if(secondsLeft === 0) {
           // clearInterval(timeInterval);
            //hide(nextQuestion)
        //}

   // }, 600);
//}


// Checking the answer
function checkCorrectAnswer() {
    if (differentQuestions[questionList].correct === differentQuestions[questionList].choices[checkCorrectAnswer]) {
        score += 20;
        displayMessage() = "Correct!"

    } 
    else {
        //secondsLeft -= 10;
        //timerStart.textContent = secondsLeft;
        displayMessage() = "Wrong!"
    }

    differentQuestions++;
    if (differentQuestions < question.length) {
        nextQuestion();
    } else {
        gameover();
    }
}

function answeredA() { checkCorrectAnswer(0)}
function answeredB() { checkCorrectAnswer(1)}
function answeredC() { checkCorrectAnswer(2)}
function answeredD() { checkCorrectAnswer(3)}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block"
}

startButton.addEventListener("click", function(){
    startQuiz();
    hide(startButton);
    hide(bodySection)
    //startTimer();
    show(scoreDisplay);
})

aChoice.addEventListener("click", answeredA)
bChoice.addEventListener("click", answeredB)
cChoice.addEventListener("click", answeredC)
dChoice.addEventListener("click", answeredD)

//startTimer();

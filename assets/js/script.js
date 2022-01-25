// Defining variables
var startButton = document.querySelector(".start-button")
var bodySection = document.querySelector(".card-body")
var scoreLink = document.querySelector(".scoreboard") // Link to HTML2
var scoreDisplay = document.querySelector(".score") // On HTML1

var timerStart = document.querySelector("#time-left")

var questionSection = document.querySelector(".question-section")
var aChoice = document.querySelector(".answer-one")
var bChoice = document.querySelector(".answer-two")
var cChoice = document.querySelector(".answer-three")
var dChoice = document.querySelector(".answer-four")

var displayMessage = document.querySelector(".message-display")
var correctAnswers = 0;

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
        correct: "c. an array",
    },
    {
        question: "What would you do to change the color of the background of your web application to black in css?",
        choices: ["a. color: black", "b. background-color: black", "c. background.color: black", "d. color.background: black"],
        correct: "b. background-color: black",
    },
    {
        question: "Which one of these is a selector for a class in CSS?",
        choices: ["a. #", "b. $", "c. .", "d. <>"],
        correct: "c. .",
    },
    {
        question: "Which one of these is a selector for an id in CSS?",
        choices: ["a. #", "b. $", "c. .", "d. <>"],
        correct: "a. #",
    },
    {
        question: "Which one of these lanuages do we use for content and structure?",
        choices: ["a. JavaScript", "b. HTML", "c. CSS", "d. All of the above"],
        correct: "b. HTML",
    }


];

console.log(differentQuestions.length)


function startNewQuiz() {
    hide(startButton);
    hide(bodySection)
    show(timerStart);
    startQuiz();
    questionIndex = 0;
    show(aChoice);
    show(bChoice);
    show(cChoice);
    show(dChoice);


}

// Making the Start Quiz button do the same thing as the next quiz button - which will give a new question 
function startQuiz() {
    nextQuestion();
}


var questionIndex = 0;
function nextQuestion() {
    questionSection.textContent = differentQuestions[questionIndex].question;
    aChoice.textContent = differentQuestions[questionIndex].choices[0]; //where each choice is located in the index
    bChoice.textContent = differentQuestions[questionIndex].choices[1];
    cChoice.textContent = differentQuestions[questionIndex].choices[2];
    dChoice.textContent = differentQuestions[questionIndex].choices[3];
} 

// Checking to see if the user answered the question correctly or not
function checkCorrectAnswer(correct) {
    if (differentQuestions[questionIndex].correct === differentQuestions[questionIndex].choices[correct]) {
        correctAnswers++;
        displayMessage.textContent = "Correct!"
    } 
    else {
        //secondsLeft -= 10;
        //timerStart.textContent = secondsLeft;
        displayMessage.textContent = "Wrong!"
    }
    
    questionIndex++;
    if (questionIndex < differentQuestions.length) {
        startQuiz();
    } else {
       gameOver();
    }
}

function answeredA() { checkCorrectAnswer(0)}
function answeredB() { checkCorrectAnswer(1)}
function answeredC() { checkCorrectAnswer(2)}
function answeredD() { checkCorrectAnswer(3)}


function gameOver() {
    hide(questionSection)
    hide(aChoice)
    hide(bChoice)
    hide(cChoice)
    hide(dChoice)
    hide(displayMessage)

    // Display score
    scoreDisplay.textContent = "Your final score is: " + correctAnswers *20 + "!";

}








startButton.addEventListener("click", startNewQuiz)

aChoice.addEventListener("click", answeredA)
bChoice.addEventListener("click", answeredB)
cChoice.addEventListener("click", answeredC)
dChoice.addEventListener("click", answeredD)


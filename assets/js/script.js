// Defining variables
var startButton = document.querySelector(".start-button")
var bodySection = document.querySelector(".card-body")
var scoreLink = document.querySelector(".scoreboard")

var questionSection = document.querySelector(".question-section")
var answerOne = document.querySelector(".answer-one")
var answerTwo = document.querySelector(".answer-two")
var answerThree = document.querySelector(".answer-three")
var answerFour = document.querySelector(".answer-four")

//Question sheet 
var differentQuestions = [
    {
        question: "What does the following show?  var drinks = ['pepsi', 'sunkist', 'monster', 'red bull']",
        choices: ["a. value", "b. object", "c. array", "d. set"],
        correct: "c. array"
    },

]



function startQuiz() {
    var question = document.getElementById(question);
    question.style.display = "block";
}






startButton.addEventListener("click", startQuiz)
answerOne.addEventListener("click", )
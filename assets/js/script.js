// Defining variables
var startButton = document.querySelector(".start-button");
var bodySection = document.querySelector(".card-body");
var scoreLink = document.querySelector(".scoreboard"); // Link to HTML2
var scoreDisplay = document.querySelector(".score"); // On HTML1

var timerEl = document.querySelector(".timer");

var questionSection = document.querySelector(".question-section");
var aChoice = document.querySelector(".answer-one");
var bChoice = document.querySelector(".answer-two");
var cChoice = document.querySelector(".answer-three");
var dChoice = document.querySelector(".answer-four");

var submitInput = document.querySelector(".submit-input");
var initialsInput = document.querySelector(".initials-input");
var finalSummary = document.querySelector(".card-final");
var displayMessage = document.querySelector(".message-display");
var correctAnswers = 0;
var timeLeft = 60;
var timeInterval;

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

//console.log(differentQuestions.length)

// All items that will hide or show once the start button is clicked
function startNewQuiz() {
    hide(startButton);
    hide(bodySection)
    show(timerEl);
    startQuiz();
    questionIndex = 0;
    show(aChoice);
    show(bChoice);
    show(cChoice);
    show(dChoice);
    startTimer()
}


// Making the Start Quiz button do the same thing as the next quiz button - which will give a new question 
function startQuiz() {
    nextQuestion();
}


// How the questions show up one after another
var questionIndex = 0;
function nextQuestion() {
    questionSection.textContent = differentQuestions[questionIndex].question;
    aChoice.textContent = differentQuestions[questionIndex].choices[0]; //where each choice is located in the index
    bChoice.textContent = differentQuestions[questionIndex].choices[1];
    cChoice.textContent = differentQuestions[questionIndex].choices[2];
    dChoice.textContent = differentQuestions[questionIndex].choices[3];
} 

// Timer for the quiz
function startTimer () {
    
    var timeInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft  + " seconds remaining";
        } else if (timeLeft == 1) { 
          timerEl.textContent = timeLeft  + " second remaining";
          } else {
            timerEl.textContent = ""
            clearInterval(timeInterval);
            gameOver()
    }
}, 1000);
}


function stopTimer() {
    clearInterval(timeInterval)
}


// Checking to see if the user answered the question correctly or not
function checkCorrectAnswer(correct) {
    if (differentQuestions[questionIndex].correct === differentQuestions[questionIndex].choices[correct]) {
        correctAnswers++;
        displayMessage.textContent = "Correct!"
    }
    else {
        displayMessage.textContent = "Wrong!"
        timeLeft -= 10;
        timerEl.textContent = timeLeft + " seconds remaining";
    };

    questionIndex++;
    if (questionIndex < differentQuestions.length) {
        startQuiz();
    } else {
       gameOver();
    }
}

// Checking for the correct answer
function answeredA() { checkCorrectAnswer(0)}
function answeredB() { checkCorrectAnswer(1)}
function answeredC() { checkCorrectAnswer(2)}
function answeredD() { checkCorrectAnswer(3)}


// Hiding and showing different items when the game is over
function gameOver() {
    hide(questionSection)
    hide(aChoice)
    hide(bChoice)
    hide(cChoice)
    hide(dChoice)
    hide(displayMessage)
    hide(timerEl)
    stopTimer()

    // Display score
    scoreDisplay.textContent = correctAnswers *20;

    show(finalSummary)
}



// // To store the highscores into the local storage
// function highScoreStorage(event) {
//     event.preventDefault();


//     if (initialsInput.value === " ") {
//       alert("You haven't entered your initials, please try again!")
//       return;
//     }

//     //var quizScores = [];
//        // quizScores[0] = {
//           //  initials: initialsInput.value,
//            // score: scoreDisplay.textContent
//       //  }

//     var quizScores = {
//         initials: initialsInput.value,
//        score: scoreDisplay.textContent
//     }

//     localStorage.setItem("quizScores", JSON.stringify(quizScores));

// };

var scoreArray = [];

// To store the highscores into the local storage
function highScoreStorage(event) {
    event.preventDefault();


    if (initialsInput.value === " ") {
      alert("You haven't entered your initials, please try again!")
      return;
    }

    var quizScores = {
        initials: initialsInput.value,
        score: scoreDisplay.textContent
    }
    //    scoreArray = [
    //        initialsInput.value + ":" + scoreDisplay.textContent
    //    ]
       scoreArray.push(quizScores)

    

    localStorage.setItem("quizScores", JSON.stringify(scoreArray));

    window.location.assign(href="index2.html")
};



// What happens when any of the buttons are clicked 
startButton.addEventListener("click", startNewQuiz)

aChoice.addEventListener("click", answeredA)
bChoice.addEventListener("click", answeredB)
cChoice.addEventListener("click", answeredC)
dChoice.addEventListener("click", answeredD)

submitInput.addEventListener('click', function(event) {
    highScoreStorage(event);
});




// !!! If second HTML doesn't work out - try having one page and hiding the rest of of the items one the scoreboard button is clicked? - if trying this, duplicate this and work on the duplicated one!!

// Error for scoreboard page - only way the error would go away was to comment out the addEventListeners

// highscores not showing up???

//timer would not subtract any time!
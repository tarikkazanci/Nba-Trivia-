$(document).ready(function(){

// QUESTIONS AND ANSWERS OBJECTS //
var questions = {
  nba: [
    "Which NBA team has the most championship wins?",
    "Who has the most career points in the NBA?",
    "Who has the most career assists in the NBA?",
    "Which NBA player has won the most championship rings?",
    "True or False: Robert Horry has more championship rings than Michael Jordan.",
    "How many NBA championships have the New York Knicks won?",
    "What number did Michael Jordan wear when he came out of retirement for the end of the 1994-1995 season?",
    "Who is the NBA all-time leader in blocks?",
    "What year was the National Basketball Association first established?",
    "True or False: Dirk Nowitzki is the highest-scoring foreign-born player in NBA history"
  ]
}

var answers = {
  nba: ["Boston Celtics", "Kareem Abdul-Jabbar", "John Stockton", "Bill Russell", "True", "2", "45", "Hakeem Olajuwon", "1946", "True"]
}

// SELECT ELEMENTS //

// select question section //
var changeQuestion = $("#questionText")

// select a "startButton" element //
var startButton = $("#startButton")

// select a user's input //
var input = $("#userInput")

// select submit button //
var submitButton = $("#submitButton")

// select remaining time's text //
var remainingTime = $("#remainingTime")

var remainingQuestion = $("#remainingQuestion")

// set a "counter" var FOR DISPLAYING Q / A's ONE BY ONE //
var counter = 0

// set "timer" for REMAINING time //
var timer = 180

// set number of questions //
var questionNumber = questions.nba.length


// EVENT LISTENERS

// Set a CLICK EVENT LISTENER for START BUTTON to display question //
startButton.click(function() {

// set a changeQuestion(questionText) to the first question //
  changeQuestion.text(questions.nba[0]);

  changeQuestion.css("font-family", "Chau Philomene One")


  // Set COUNTDOWN with "setInterval" when user press START.//
  var startTimer = setInterval(function() {

    if (timer < 0) {
      clearInterval(startTimer);
      alert("TIME IS OVER");
    } else {
      remainingTime.text(timer)
      timer-=1
    }
  },1000)
})


// Set a click event listener for submit button to display next question if the answer matches with correct answer
submitButton.click(function() {
  var inputVal = $("#userInput").val().toLowerCase()

  if (inputVal === answers.nba[counter].toLowerCase() ) {
    counter+=1
    changeQuestion.text(questions.nba[counter]);
  }
})


// Key "ENTER PRESS" event //
input.keypress(function(event) {
  var inputVal = $("#userInput").val().toLowerCase()

  // ENTER EVENT //
  if (event.which === 13) {
    if (inputVal === answers.nba[counter].toLowerCase() ) {

    // Call addUserAnswer function. When user enters an input add it to the "User Answer" section
      addUserAnswer(answers.nba[counter]);
      addCorrectAnswer(answers.nba[counter]);

      counter+=1

      changeQuestion.text(questions.nba[counter]);
      alert("CORRECT ANSWER!");

   // When user press enter with a correct answer remaining question DECREASES //
      questionNumber-=1
      remainingQuestion.text(questionNumber)
    }
    else {
      addCorrectAnswer(answers.nba[counter]);
      addUserAnswer(inputVal);
      counter+=1
      changeQuestion.text(questions.nba[counter]);
    }

    // Changes input's value to the empty("") after clicking enter //
    input.val("");
  }

  // alert("THE GAME IS OVER");
})

// FUNCTIONS //

// Adds new <li> element to the <ul> (User Answer) and adds user's input(answer) to the new <li>
function addUserAnswer(answer) {
  var userAnswer = $(`<li>${answer}</li>`);
  $("#usersAnswer ul").append(userAnswer);
}

// Adds new <li> element to the <ul> (Correct Answer) and adds user's input(answer) to the new <li>
function addCorrectAnswer(correct) {
  var correctAnswer = $(`<li>${correct}</li>`);
  $("#correctAnswer ul").append(correctAnswer);
}

// function startQuiz(anchorid) {
//   location.hash = '#' + anchorid;
// }

})

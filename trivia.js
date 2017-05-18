// $(document).ready(function(){

// QUESTIONS AND ANSWERS
var questions = {
  nba: [
    "Which NBA team has the most championship wins?",
    "Who has the most career points in the NBA?",
    "Who has the most career assists in the NBA?",
    "Which NBA player has won the most championship rings?",
    "True or False: Robert Horry has more championship rings than Michael Jordan.",
    "How many NBA championships have the New York Knicks won?",
    "Who is the NBA all-time leader in blocks?",
    "True or False: Dirk Nowitzki is the highest-scoring foreign-born player in NBA history"
  ]
}

var answers = {
  nba: ["Boston Celtics", "Kareem Abdul-Jabbar", "John Stockton", "Bill Russell", "True", "2", "Hakeem Olajuwon", "True"]
}

// SELECT ELEMENTS

// select question section
var changeQuestion = $("#questionText")

// select a "startButton" element
var startButton = $("#startButton")

// select a user's input
var input = $("#userInput")

// select submit button
var submitButton = $("#submitButton")

// select remaining time's text
var remainingTime = $("#remainingTime")

var remainingQuestion = $("#remainingQuestion")

// set a "counter" var FOR DISPLAYING Q / A's ONE BY ONE
var counter = 0

// set "timer" for REMAINING time
var timer = 200

// set number of questions
var questionNumber = questions.nba.length


// CLICK AND KEY EVENTS

// Set a CLICK EVENT LISTENER for START BUTTON to display question
startButton.click(function() {

  changeQuestion.text(questions.nba[0]);
  changeQuestion.css("font-family", "Chau Philomene One")


  // Set COUNTDOWN with "setInterval" when user press START.
  var startTimer = setInterval(function() {
    remainingTime.text(timer)
    timer-=1
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


// Key "ENTER PRESS" event
input.keypress(function(event) {
  var inputVal = $("#userInput").val().toLowerCase()

  // ENTER EVENT
  if (event.which === 13) {
    if (inputVal === answers.nba[counter].toLowerCase() ) {

      counter+=1
      changeQuestion.text(questions.nba[counter]);
      alert("CORRECT ANSWER!");
      // When user press enter with a correct answer remaining question DECREASES
      questionNumber-=1
      remainingQuestion.text(questionNumber)
    }
    else {
      counter+=1
      changeQuestion.text(questions.nba[counter]);
    }

    // Changes input's value to the empty("") after clicking enter
    input.val("");

    addUserAnswer(inputVal);
    // addCorrectAnswer();
  }
})

function addUserAnswer(answer) {
  var userAnswer = $(`<li>${answer}</li>`);
  $("#usersAnswer ul").append(userAnswer);
}

function addCorrectAnswer(correct) {
  var correctAnswer = $(`<li>${correct}</li>`);
  $("#correctAnswer ul").append(correctAnswer);
}



// })

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
  nba: ["Boston Celtics", "Kareem Abdul-Jabbar", "John Stockton", "Bill Russel", "True", 2, "Hakeem Olajuwon", "True"]
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

var counter = 0


// CLICK AND KEY EVENTS

// Set a click event listener for start button to display question
startButton.click(function() {
  changeQuestion.text(questions.nba[0]);
})

// Set a click event listener for submit button to display next question if the answer matches with correct answer

// submitButton.click(function() {
//
//    if (inputVal === answers.nba[counter].toLowerCase() ) {
//      var inputVal = $("#userInput").val().toLowerCase()
//        counter+=1
//        changeQuestion.text(questions.nba[counter]);
// }
// })

// Key "enter press" event
input.keypress(function(event) {

    if (event.which === 13) {
      var inputVal = $("#userInput").val().toLowerCase()

    if (inputVal === answers.nba[counter].toLowerCase() ) {
        counter+=1
        changeQuestion.text(questions.nba[counter]);
    }

// changes input's value to the empty after clicking enter
      input.val("");
  }
})

















// })

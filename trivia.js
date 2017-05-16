// $(document).ready(function(){

// create questions and answer objects with the arrays
var questions = {
  nba: [
        "Which NBA team has the most championship wins?",
        "Who has the most career points in the NBA?",
        "Who has the most career assist points in the NBA?",
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

// select question section
var changeQuestion = $("#questionText")
// select a "startButton" element
var startButton = $("#startButton")
// select a user's input
var input = $("#userInput")
// select input's value
var inputVal = $("#userInput").val()
// select submit button
var submitButton = $("#submitButton")




// set a click event listener for start button to display question
startButton.click(function() {
 changeQuestion.text(questions.nba[0]);
})


// set a click event listener for submit button to display next question
submitButton.click(function() {
  if (inputVal === answers.nba[0]) {
    console.log("Submit")
  changeQuestion.text(questions.nba[1]);
}
})

















// input.keypress(function(event) {
//
//   if (event.which === 13) {
//     if (inputVal === answers.nba[0]) {
//       alert("Got It!")
//     }
//   }
// })






// })

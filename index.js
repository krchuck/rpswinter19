var choices = document.getElementsByClassName("choices");
var compChoices = ["rock", "paper", "scissor"];
var userChoice = "";
var compChoice = "";

// TODO: 
// Create a place to display the user and comp choices
// Do the logic to see who won
// Display the winner

for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    console.log(userChoice);
  });
};  

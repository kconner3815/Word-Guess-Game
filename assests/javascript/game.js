// create a list of words for the computer to choose from by making an array 

var wordsList = ["green", "red", "yellow", "blue","white","purple"]

// Declare your variables empty arrays will store future values
var choosenWord = [];
var lettersInWord = [];
var numOfBlanks = 0;
var blanksAndFilled = [];
var wrongGuesses = [];


var wins = 0;
var losses = 0;
var guesses = 10; 

// start game here 
fucntion startGame () {

    // Set the number of guesses back 
    guesses = 10; 

    // word will be picked at random by the math.random thing b/c choosen word 
    choosenWord = wordsList[Math.floor(Math.random()* wordsList.length)];

    // make sure the word is split up 

    lettersInWord = choosenWord.split("");

    numOfBlanks = lettersInWord.length; 
// empty array for restting or storing future value 
    blanksAndFilled = [];
    wrongGuesses = [];

// letters in picked solution
  for (var i = 0; i < numOfBlanks; i++) {
    blanksAndFilled.push("_");
  }

document.getElementById("guesses-left").innerHTML = numOfguesses;


document.getElementById("word-blanks").innerHTML = blanksAndFilled.join(" ");

// Clears the wrong guesses from the previous round
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


}

function 
// create a varibale to store _ _ _ _ _ _ _ space for the keys - lettersGuessed or words guessed
// create a var to keep track of the letters guessed 
// create an array of the the possible words to choose from 
// create a math. random to pick that word from the array 
// create an alery IF the user guessess the wrong letter 
// Create a an alert if the user guesses the word - you win! 

// create all variables here



var wordsList = ["green", "red", "yellow", "blue","white","purple"];

// Declare variables empty arrays will store future values??
var choosenWord = [];
var lettersInWord = [];
var numOfBlanks = 0;
var blanksAndFilled = [];
var wrongGuesses = [];


var wins = 0;
var losses = 0;  // still confused on this 1
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

// make a function> 

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

function checkLetters(letter) {

    // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
    var lettersInWord = false;
  
    // Check if a letter exists inside the array at all.
    for (var i = 0; i < numBlanks; i++) {
      if (chosenWord[i] === letter) {
        // If the letter exists then toggle this boolean to true. This will be used in the next step.
        lettersInWord = true;
      }
    }
  
    // If the letter exists somewhere in the word, then figure out exactly where (which indices).
    if (lettersInWord) {
  
      // Loop through the word.
      for (var j = 0; j < numBlanks; j++) {
  
        if (chosenWord[j] === letter) {
          // Here we set the specific space in blanks and letter equal to the letter when there is a match.
          blanksAndFilled[j] = letter;
        }
      }
      // Logging for testing.
      console.log(blanksAndFilled);
    }
    // If the letter doesn't exist at all...
    else {
      // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
      wrongGuesses.push(letter);
      numOfGuesses--;
    }
  }
  
  
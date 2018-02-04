
var words = ["whale", "octopus", "narwhal", "anemone"];
var word = ""; 
var wordArray = []; 
var numLetters = 0;
var wordDisplay=[];
var wrongGuesses=[];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// startRound();
function startRound() {
	guessesLeft = 9;
	word = words[Math.floor(Math.random() * words.length)];
	wordArray = word.split("");
	numLetters = wordArray.length;
	wordDisplay = [];
	wrongGuesses = [];
	console.log(wordArray);
	console.log(wordDisplay);

	for (i=0; i<wordArray.length;i++) {
	wordDisplay.push("-");
	}

	// for (i=0; i<numLetters;i++) {
	// wordDisplay.push("-");
	// }

  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("display").innerHTML = wordDisplay.join("");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");
}
	
function checkLetters(letter) {
// Default value to false 
  var letterInWordArray = false;

  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === letter) {
      letterInWordArray = true;
    }
  }
	// console.log(letterInWordArray);

  if (letterInWordArray) {
    for (var j = 0; j < wordArray.length; j++) {
      if (wordArray[j] === letter) {
        wordDisplay[j] = letter;
        console.log("wordArray[j]: " + wordArray[j]);

      }
    }
    console.log("wordDisplay" + wordDisplay);
    console.log("letter:" + letter)
  }

  else {
    wrongGuesses.push(letter);
    guessesLeft--;
  }
 } 

function roundComplete() {
	console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses left: " + guessesLeft);
	document.getElementById("guesses-left").innerHTML = guessesLeft;
	document.getElementById("display").innerHTML = wordDisplay.join("");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");

	// Granted they have guesses left, if wordDisplay is the same as wordArray, they win.
	if (wordArray.toString() === wordDisplay.toString()) {
		wins++;
		alert("Huzzah!");
		document.getElementById("wins").innerHTML = wins;
		startRound();
	}

	else if (guessesLeft === 0) {
		losses++;
		alert("So soddy");
		document.getElementById("losses").innerHTML = losses;
		startRound();
  }
}

startRound();

document.onkeyup = function(event) {
  var guess = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(guess);
  roundComplete();
};



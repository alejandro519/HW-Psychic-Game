

 //Define the variables that will be used for the game - some letters in the alphabet. This will be an array.

 var letters = ["r", "s", "t", "l", "n", "e", "y"];

 //Create variables that record the wins, losses and remaining guesses and their starting value

 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;

 var winsText = document.getElementById("wins");
 var lossesText = document.getElementById("losses");
 var guessesLeftText = document.getElementById("guesses-left");
 var yourGuessesSoFarText = document.getElementById("guesses-so-far");


 //Record the number of times the user has chosen a letter in the array correctly. onKeyup.
 document.onkeyup = function (event) {

     var computerGuess = letters[Math.floor(Math.random() * letters.length)];
     console.log(computerGuess);

     var userGuess = event.key;
     console.log(userGuess);

     if ((computerGuess === "r") || (computerGuess === "s") || (computerGuess === "t") || (computerGuess === "l") || (computerGuess === "n") || (computerGuess === "e") || (computerGuess === "y")); {

         if ((computerGuess === "r" && userGuess === "r") ||
             (computerGuess === "s" && userGuess === "s") ||
             (computerGuess === "t" && userGuess === "t") ||
             (computerGuess === "l" && userGuess === "l") ||
             (computerGuess === "n" && userGuess === "n") ||
             (computerGuess === "e" && userGuess === "e") ||
             (computerGuess === "y" && userGuess === "y")) {
             wins++;
             console.log("You Guessed Right!")
         } else {
             losses++;
             guessesLeft--;
             console.log("You Lose!")
         }

         winsText.textContent = "Wins: " + wins;

         //Record the number of times the user did not choose correctly
         lossesText.textContent = "Losses: " + losses;

         //Guess the number of guesses left for the user. forLoop
         guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

         //Record and display the letters the user chose so far until the user wins or loses
         yourGuessesSoFarText.textContent = "Your Guesses So Far: " + userGuess + ",";
     }
 }




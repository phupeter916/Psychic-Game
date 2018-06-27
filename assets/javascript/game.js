



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessleft = 9;
var userGuesses = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


// set the function onkeyup
document.onkeyup = function (event) {                                                                                   
    var userGuess = event.key

    // on event key when key is push it sets users guesses letter 
    userGuesses.push(userGuess)
    

    if (userGuess === computerGuess) {
        wins++;
        alert ("You Win!");
        

        document.getElementById("guessleft").innerHTML = guessleft = 10;
        document.getElementById("userGuess").innerHTML = userGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        
    }

    if (userGuess != computerGuess && guessleft === 0) {
        losses++;
        alert ("You Lose!");

        document.getElementById("guessleft").innerHTML = guessleft = 10;
        document.getElementById("userGuess").innerHTML = userGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        
        
    }
        
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessleft").innerHTML = guessleft--;
    document.getElementById("userGuess").innerHTML = userGuesses;


    

};

    















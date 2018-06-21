



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessleft = 10;

document.onkeyup = function(event) {

    var userGuess = event.key;
    

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    

    

    if (userGuess === computerGuess) {
        wins++; guessleft--;
    }

    if (userGuess != computerGuess) {
        losses++; guessleft--;
    }

    var html =
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>guessleft: " + guessleft + "</p>" +
    <p>guess:  + guess + </p>;

    
    



    


      











};










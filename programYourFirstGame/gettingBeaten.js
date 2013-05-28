// Check if the user is ready to play!
var wantplay = confirm("Are you ready to play?");
var age = prompt("What's your age?");
if(age<18) console.log("you're not allowed to play... but!");
else console.log("Go ahead! PLay IT!");


var intro = "Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.";

console.log(intro);

//First Move
console.log("Batman glares at you.");
var userAnswer = prompt("Are you feeling lucky, punk?");

//The story heats up!
if(userAnswer === "yes") 
    console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
else
    console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
    
//Asking for feedback
var feedback = prompt("If is worthwhile can you give me your feedback in 1-10?");
if(feedback > 8) console.log("This is just the beginning of my game empire. Stay tuned for more!");
else console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
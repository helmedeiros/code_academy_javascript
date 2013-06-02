/*
	Declare your variables
	All right! Let's start by declaring the variables we'll be using. We'll need a variable to check if we're still slaying, a variable to check if we hit the dragon, a variable to keep track of how much damage we've dealt the dragon this round, and a variable to keep track of total damage.

	We'll be relying on random numbers to see if we hit the dragon and, if so, how much damage we did. JavaScript can generate random numbers like this:

	var randomNumber = Math.random();
	This creates a random number between 0 and 1. By multiplying the number and rounding it down, however, we can make it a random whole number! For example:

	Math.floor(Math.random() * 5 + 1);
	will generate a random number between 1 and 5, inclusive. (See the Hint if you're not quite sure how this works.)

	INSTRUCTIONS
	Declare and set the following variables:
	slaying equal to true
	youHit to a random number that's either 0 (which JavaScript reads as 'false') or 1 (which JavaScript reads as 'true')
	damageThisRound to a random number between 1 and 5 (inclusive)
	totalDamage to 0
*/
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
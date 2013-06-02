/*
	The first 'if' statement
	Great! Now we want to add a couple of branches to our program so it can handle different outcomes. You know what this means: if and else!

	INSTRUCTIONS
	Inside your while loop, create an if/else statement that checks the value of youHit. If it's 1 (true), it should log a congratulatory message to the console, telling the user (s)he hit the dragon. If it's 0 (false), it should log a message to the console saying that the dragon defeated you.
	Either way, slaying should be set to false, since either you beat the dragon (and the slaying's over) or the dragon beat you!
*/
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying){
	if(youHit){
		print("You've hit the dragon!");
	}else{
		print("The dragon have defeated you!");
	}
    slaying = false;
}
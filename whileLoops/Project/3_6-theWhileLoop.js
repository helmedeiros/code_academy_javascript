/*
	The 'while' loop
	Awesome! Now let's add in our while loop. We want to run the whole game as long as we're trying to kill the dragon—that is, while slaying is true.

	When checking variables like slaying that are set to true, you don't need to write something like:

	while(slaying === true)
	You can just write

	while(slaying)
	It also helps to give your variables names that make the code look more like regular English. while(slaying) { } is easy to remember because it's so close to everyday speech!

	INSTRUCTIONS
	Create a while loop that only executes when slaying is true. For this exercise, set slaying to false in the body of the loop. (We want to make sure the loop can exit—no infinite loops for us!)
*/
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying){
	slaying = false;
}
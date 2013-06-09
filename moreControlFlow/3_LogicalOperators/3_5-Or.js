/*
	Or
	The logical operator or is written in JavaScript like this: ||. It evaluates to true when one or the other or both expressions are true; if they're not, it evaluates to false.

	true || true // => true
	true || false // => true
	false || true // => true
	false || false // => false
	INSTRUCTIONS
	Create two variables, tired and bored, and set one equal to true and the other equal to false. (It doesn't matter which is which.) Inside the nap function, create an if statement that returns true if either tired or bored (or both!) are true, and false otherwise.
*/
// Declare your variables here!
var tired = true;
var bored = false;

var nap = function() {
  // Add your if/else statement here!
  var timeToNap = false;
  if(tired || bored) timeToNap = true;
  return timeToNap;
};

print("Are you bored? " + bored);
print("Are you tired? " + tired);
print("Do you need a nap? " + nap());
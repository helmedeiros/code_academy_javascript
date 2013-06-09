/*
	Not
	The logical operator not is written in JavaScript like this: !. It makes true expressions false, and vice-versa.

	!true // => false
	!false // => true
	INSTRUCTIONS
	Create one variable, programming, and set it equal to false. Inside the happy function, create an if statement that returns true if the expression involving programming is true (that is, !programming will be true). Check the Hint if you need help.
*/
// Declare your variables here!
var programming = false;

var happy = function() {
  // Add your if/else statement here!
  var areYouHappy = false;
  if(!programming) areYouHappy = true;
  return areYouHappy;
};

var shouldOrNot = function(isHappy){
	var shouldNot = 'shouldn\'t';
	if(isHappy) shouldNot = 'should';
	return shouldNot;
};

print("Are you programming? " + programming);
print("So you " + shouldOrNot(happy()) + " be happy");
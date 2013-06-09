/*
	And
	The logical operator and is written in JavaScript like this: &&. It evaluates to true when both expressions are true; if they're not, it evaluates to false.

	true && true // => true
	true && false // => false
	false && true // => false
	false && false // => false
	INSTRUCTIONS
	Create two variables, hungry and foodHere, and set them both equal to true. Inside the eat function, create an if statement that returns true only if both hungry and foodHere are true, and false otherwise. The function eat should take no input and hungry and foodHere should both be globals.
*/
// Declare your variables here!
var hungry = true;
var foodHere = true;

var eat = function() {
 var timeToEat = false;

 if(hungry && foodHere) timeToEat = true;

 return timeToEat;
};

print("Let's eat? " + eat());
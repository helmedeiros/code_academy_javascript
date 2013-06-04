/*
	If / else if / else
	Good! Let's also get some practice in with else if, as well as learn about a fancy new function: isNaN.

	If you call isNaN on something, it checks to see if that thing is not a number. So:

	isNaN('berry') // => true
	isNaN(NaN) // => true
	isNaN(undefined) // => true
	isNaN(42);  // => false
	Be careful: if you call isNaN on a string that looks like a number, like '42', JavaScript will try to help by automatically converting the string '42' to the number 42 and return false (since 42 is a number).

	Note that you can't just do

	isNaN(unicorns);
	unless you've already defined the variable unicorns. You can, however, do

	isNaN("unicorns"); // => true
	INSTRUCTIONS
	Add an else if branch to your existing if/else statement. If the number put into the function is not a number at all, instead of returning true or false, the function should return a string that tells the user that their input isn't a number. (This string can say whatever you like.)
*/
var isEven = function(number) {
  if(isNaN(number)) return "A number is requested to preocess if it is even or odd!"

  var isEven;
  if(number%2!==0) isEven = false;
  else isEven = true;
  
  return isEven;
};

var printIsEven = function(number){
	var even = isEven(number);
	
	print("Is "+number+" even ? " + even);
};

printIsEven(2);
printIsEven(3);
printIsEven("this string");
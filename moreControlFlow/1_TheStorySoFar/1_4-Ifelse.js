/*
	If / else
	You've learned about if and else, and how they control what your program does. Here's a quick refresher on the syntax:

	if (// Some condition ) {
	    // Do something
	} else if (// Some other condition ) {
	    // Do something else
	} else {    // Otherwise
	    // Do a third thing
	}
	INSTRUCTIONS
	Write an if / else statement inside the isEven function. It should return true if the number it receives is evenly divisible by 2; otherwise (else), it should return false. (Make sure to return—don't console.log()!)
*/
var isEven = function(number) {
	var isEven = true;
	
	if(number%2 !== 0){
		isEven = false;
	}
	
	return isEven;
};

print("2 is Even ? " + isEven(2));
print("3 is Even ? " + isEven(3));
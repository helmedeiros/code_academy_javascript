/*
	Adding to an existing switch
	The switch statement is put together like this:

	switch (//Some expression//) {
	    case 'option1':
	        // Do something
	        break;
	    case 'option2':
	        // Do something else
	        break;
	    case 'option3':
	        // Do a third thing
	        break;
	    default:
	        // Do yet another thing
	}
	JavaScript will try to match the expression between the switch() parentheses to each case. It will run the code below each case if it finds a match, and will execute the default code if no match is found.

	INSTRUCTIONS
	Our switch statement needs a case for 'yellow'. Add it in and make it log a string of your choice to the console (it should be different from the default string).
	Don't forget to end your case with a break statement—otherwise, it will go on and execute the code for default, too! We don't want that.
*/
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
	console.log("We all live in a YELLOW... sure you do know the rest!");
	break;
  default:
    console.log("I don't think that's a primary color!");
}
/*
	Practice with switch
	Now that you've added cases to an existing switch, let's practice adding a default block.

	INSTRUCTIONS
	Add the default block at the bottom of the switch statement, then run the code a few times with different inputs. switch: super useful!
*/
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
	console.log("Come on... there must be some that you like. Do you like licorice, gum or beets?");
}
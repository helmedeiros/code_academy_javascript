/*
	More practice with switch
	You know what they say: practice makes perfect!

	INSTRUCTIONS
	We've given you the empty skeleton of a switch statement. Complete the existing case, then add at least one additional case and a default behavior with whatever console.log() calls you like.
*/
var answer = prompt("What gender of movie do you like!");

switch(answer) {
  case 'action':
    console.log("Fucking yeah!");
    break;
  case 'comedy':
	console.log("HEEHEH... you're good!");
	break;
  case 'drama':
	console.log("Okay.. crybaby");
	break;
  default:
	console.log("This a long tail... I never heard about this gender " + answer);
  
}
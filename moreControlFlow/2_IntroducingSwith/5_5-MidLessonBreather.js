/*
	Mid-lesson breather
	Well done! Even though we've been focusing on switch, we've covered a lot so far. You've:

	Reviewed if/else if/else
	Reviewed for and while
	Learned about the switch statement and how to use it instead of multiple if/elses
	Covered switch syntax
	Written your own switch!
	INSTRUCTIONS
	When you're ready, click Save & Submit Code to move on to the last section of this lesson: logical operators like 'and', 'or', and 'not'.
*/
var answer = prompt("What would you want for lunch?");
switch(answer){
    case 'food':
		console.log("seriously shrek?");
		break;
	case 'anything':
		console.log("Wait and trust!");
		break;
	case 'rice':
		console.log("Good... we're on track.");
		break;
	default:
		console.log("Okay... so go to your bedroom and think about it!");
}
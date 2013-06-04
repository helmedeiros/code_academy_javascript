// Write your loop below!
/*
	Sneak preview: the switch statement
	As you might imagine, if you have a lot of choices you want to cover in a program, it might be annoying to type else if () ten times. That's why JavaScript has the switch statement!

	switch allows you to preset a number of options (called cases), then check an expression to see if it matches any of them. If there's a match, the program will perform the action for the matching case; if there's no match, it can execute a default option.

	INSTRUCTIONS
	Take a look at the code in the editor. Can you see how the switch statement works? Hit Save & Submit Code to take it for a test drive!
*/
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
   print("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
   print("Got it! Tomato's my favorite.");
    break;
  case 'salad':
       print("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
       print("Pie's not a meal!");
    break;
  default:
       print("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
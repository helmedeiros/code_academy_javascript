/*
	Overview
	So far we've seen how to control our programs given a single condition: whether one variable is equal to a certain value, for instance. But what if we want to check more than one variable?

	For this, we'll need logical operators. JavaScript has three: and (&&), or (||), and not (!).

	Using these, we can check several variables at once! Check out the code in the editor.

	INSTRUCTIONS
	Starting to make sense? Set both variables in the editor to true and hit Save & Submit Code to see what happens!
*/
// Complete lines 1 and 2!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  print("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  print("Let's see if we can change your mind.");
} else {
  print("You only like one but not the other? We'll work on it.");
}
/*The 'do' / 'while' loop
Sometimes you want to make sure your loop runs at least one time no matter what. When this is the case, you want a modified while loop called a do/while loop.

This loop says: "Hey! Do this thing one time, then check the condition to see if we should keep looping." After that, it's just like a normal while: the loop will continue so long as the condition being evaluated is true.

INSTRUCTIONS
Click Save & Submit Code to see the loop in action. It runs once because do tells it to, but then never again because loopCondition is false!*/

var loopCondition = false;

do {
	print("I'm gonna stop looping 'cause my condition is " + String(loopCondition) + "!");	
} while (loopCondition);
/*jshint multistr:true 
What you'll be building
In this project, you'll be writing a short program that checks a block of text for your name.

Specifically, it will check the text for the first letter of your name, then push (add) the number of characters equal to your name's length to an array. By inspecting the array, you'll be able to see if your name was mentioned!

Once you've got the hang of loops, arrays, and if statements, we'll talk about ways this project could be improved.

INSTRUCTIONS
Some of this code will be new to you, but don't worry—we'll go through it step-by-step. Ready? Click Save & Submit Code to begin!
*/

var text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] == "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
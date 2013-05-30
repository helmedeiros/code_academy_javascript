/*jshint multistr:true 

Your second "for" loop
Okay! Last loopy step: add another for loop, this time inside the body of your if statement (between the if's {}s).

This loop will make sure each character of your name gets pushed to the final array. The if statement says: "If we find the first letter of the name, start the second for loop!" This loop says: "I'm going to add characters to the array until I hit the length of the user's name." So if your name is 11 letters long, your loop should add 11 characters to hits if it ever sees the first letter of myName in text.

For your second for loop, keep the following in mind:

First, you'll want to set your second loop's iterator to start at the first one, so it picks up where that one left off. If your first loop starts with

for(var i = 0; // rest of loop setup
your second should be something like

for(var j = i; // rest of loop setup
Second, think hard about when your loop should stop. Check the Hint if you get stuck!

Finally, in the body of your loop, have your program use the .push() method of hits. Just like strings and arrays have a .length method, arrays have a .push() method that adds the thing between parentheses to the end of the array. For example,

newArray = [];
newArray.push('hello');
newArray[0] // equals 'hello'
INSTRUCTIONS
Okay! Go ahead and add that second for loop inside the body of your if statement.
*/
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, turpis at sodal \
, nulla dui egestas Helio urna, ut ultrices ligula elit semper magna. Vestibulum vitae eros turpis. Donec \
faucibus sodales dolor, id congue dolor tincidunt sed. Pellentesque ac nisi non erat ullamcorper \
sodales elementum id leo. Helio integer non dictum dui. Nulla facilisi. Curabitur facilisis, ullamcorper \
iaculis euismod, ante lorem egestas justo, eu imperdiet quam orci vitae nisi. Ut Helio tellus ut quam \
bibendum aliquam. Etiam ullamcorper, ante a euismod mattis, libero tellus vehicula tellus, a cursus \
tortor augue vel orci. Phasellus at vestibulum lectus.";
var myName = "Helio";
var hits = [];
for(var i = 0; i < text.length; i++){
    if(text[i] === myName[0] ){
        for(var j = i; j < (i+myName.length); j++){
			hits.push(text[j]);
		}
    }
}
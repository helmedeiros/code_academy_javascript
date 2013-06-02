//Remember to set your condition outside the loop!
/*Practice makes perfect
Okay. Time for you to create a while loop from scratch!

We've set up a function, loop, for you to write your while loop in, as well as created the empty loop.

Remember to set up the condition you're checking outside the loop—if you do it in the loop, it will keep resetting and the loop could go on forever!

INSTRUCTIONS
Write a while loop that logs "I'm looping!" to the console three times. You can do this however you like, but NOT with three console.log calls. Check the Hint if you need help!
*/
var lessThanThree = function(times){
	var less = true;
	if(times >= 3) less = false;
	return less;
};

var loop = function(){
	var times = 0;
	while(lessThanThree(times)){
		print("I'm looping!");
		times++;
	}
};

loop();
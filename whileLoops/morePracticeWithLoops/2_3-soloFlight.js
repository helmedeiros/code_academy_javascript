//Remember to make your condition true outside the loop!
/*Solo flight
Great work! Let's try another. This time, no help at all! (Well, some help—check the Hint if you get stuck.)

INSTRUCTIONS
Inside the soloLoop function, write a while loop that takes an initial condition that's true. Your loop should log "Looped once!" to the console, then change that initial condition to false.
MAKE SURE to set your condition to false in the body of your loop. Otherwise, you'll loop forever!*/


var soloLoop = function(){
	var solo = true;
	while(solo){
		print("Looped once!");
		solo = false;
	}
};

soloLoop();
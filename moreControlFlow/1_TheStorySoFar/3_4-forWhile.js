// Write your loop below!
/*
	For or while
	Great! Just one more bit of review and we'll move on to the new stuff.

	INSTRUCTIONS
	Create a for or while loop in the editor. It can do anything you like! (Just be careful—if you accidentally create an infinite loop, you'll crash your browser.) Check the Hint if you need a syntax review.
*/
var forLoop = function(init, end, increment){
	for(var i = init; i <= end; i+=increment){
		print(i);
	}
};

var whileLoop = function(infos){
	var i = 0;
	while(i <= infos.length){
		print(infos[i]);
		i++;
	}
};

print(forLoop(1,10,1));
var array = [1,2,3,4];
print(whileLoop(array));
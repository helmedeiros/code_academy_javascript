/*When to 'while' and when to 'for'
As we mentioned, for loops are great for doing the same task over and over when you know ahead of time how many times you'll have to repeat the loop. On the other hand, while loops are ideal when you have to loop, but you don't know ahead of time how many times you'll need to loop.

As you saw, however, you can combine a while loop with a counter variable to do the same kind of work a for loop does. In these cases, it's often a matter of preference.

INSTRUCTIONS
Write two loops in the editor: one while, one for. No restrictions on this one; just make sure your loops are syntactically correct, and be careful to avoid infinite loops!*/

var forFunction = function(){
	for(var i = 0; i <= 3; i++){
		print(i);
	}
};	

var whileFunction = function(){
	var i = 0;
	while(i <= 3){
		print(i);
		i++;
	}
};

var timeExecution = function(funcToTime){
	var start = new Date().getMilliseconds();
	print('Calling function ->')
	
	funcToTime();
	
	var end = new Date().getMilliseconds();
	var time = end - start;
	print('Execution time: ' + time);
};

timeExecution(forFunction);
timeExecution(whileFunction);
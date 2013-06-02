// Write your code below!
/*
	Review
	Awesome work! You've now learned about all the loops there are: for, while, and do.

	INSTRUCTIONS
	To finish up and prove your loop mastery, write three syntactically correct loops in the editor: one for, one while, and one do. Beware of infinite loops!
*/
var profilling = function(loopFunction){
	var start = Date.now();
	
	loopFunction();
	
	var time = Date.now() - start;
	print("Execution time:"+time);
}

var forLoop = function(){
	for(var i = 0; i <= 3; i++){
		print(i);
	}
};

var whileLoop = function(){
	var i = 0;
	while(i <= 3){
		print(i);
		i++;
	}
};

var doWhileLoop = function(){
	var i = 0;
	do{
		print(i);
		i++;
	}while(i <= 3);
};

profilling(forLoop);
profilling(whileLoop);
profilling(doWhileLoop);
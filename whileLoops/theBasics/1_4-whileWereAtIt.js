/*While we're at it
Great work with for loops! We know you know your stuff, but just as a reminder, for loop syntax looks like this:

for(var i = start; i < end; i++){
    // Do something
}
Where "start" is where our counter variable (usually i) starts, and "end" is the condition that ends the loop.

But what if you don't know ahead of time what your counter will be or how many times you'll have to go through the loop? Enter while.

INSTRUCTIONS
Check out the while loop in the editor. Can you guess what it will do? Hit Save & Submit Code when you think you know! (The answer's in the Hint.)
Don't worry about the Math.floor bit for now—we'll explain it soon!*/

var coin = Math.floor(Math.random() * 2);

while(coin){
	print("Heads! Flipping again...");
	var coin = Math.floor(Math.random() * 2);
}
print("Tails! Done flipping.");
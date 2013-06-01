/*While syntax
The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.

In the example you just saw, the computer was randomly flipping a coin: while the coin came up heads (when coin equalled 1), 
it would flip again, and it would stop flipping once it got tails (when coin was 0). Since the flip was random, we didn't know 
ahead of time how many loops we'd need.

The syntax looks like this:

while(condition){
    // Do something!
}
As long as the condition evaluates to true, the loop will continue to run. As soon as it's false, it'll stop. 
(When you use a number in a condition, as we did earlier, JavaScript understands 1 to mean true and 0 to mean false.)

Since you've already mastered for loops, this simpler syntax should be a breeze for you.

INSTRUCTIONS
Try it yourself—complete the while loop in the editor so it will print out "I'm learning while loops!". 
Do this by adding the condition between the parentheses—don't change line 5, or you could get an infinite loop!*/
var understand = true;

while(understand){
	print("I'm learning while loops!");
	understand = false;
}
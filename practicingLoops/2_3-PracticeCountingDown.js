// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!
/*Practice counting down
For loops only run when the condition is true.

Do not run the code without changing it!

It is important that there is a way for the for loop to end. If the for loop is always going to be true, then you will be stuck in an infinite loop and your browser will crash! Look at the code. It is bad.

a. It begins at i = 1. 
b. It will keep going as long as i >= 1.
c. Because now i = 1, the code will run.

d. We increment i by 1 and now i = 2. This satisfies the condition. We run the code. 
e. Increment i by 1 and now i = 3. This satisfies the condition that i >= 1. We run the code.
f. We will keep incrementing the code up by 1. It will always satisfy the condition. The loop NEVER ends. This will crash your computer!*/
for (var i = 1; i >= 1; i++) {
	console.log(i);
}
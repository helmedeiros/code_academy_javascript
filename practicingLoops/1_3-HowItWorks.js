// Example for loop
/*How does it work?
We've gone through the three bits of syntax for a for loop. But how exactly does it work? Let's imagine the steps the computer takes to run the for loop on the right.

It starts off with i = 2
It then asks: Is i currently less than 13? Because i = 2, this is true and we continue.
We do NOT increment now. Instead, if the condition is met, we run the code block.
Here, the code block prints out the value of i. It is currently 2 so 2 will be printed out.
Once the code block is finished, the for loop then increments / decrements. Here, we add 1.
Now i = 3. We check if it is less than 13. If it is true, we run the code block.
The code block runs, and then we increment.
We repeat these steps until the condition i < 13 is no longer true.

INSTRUCTIONS
1.Make the computer start counting at 8.
2.Keep counting while i < 120.
3.Count up by increments of 12.
Remember, if you accidentally make a loop that never ends, your browser will crash!
*/
for (var i = 8	 ; i < 120; i+=12) {
	console.log(i);
}
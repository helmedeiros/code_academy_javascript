/*Loops and arrays III
Loops and arrays often go hand in hand. So let's practice this a little more.

Arrays contain a number of elements. Those elements are in a particular order. Loops go well with arrays because the loop iterates in a predictable order (for instance, i += 2 makes it go up by twos).

INSTRUCTIONS
1.Write a for loop that finds the largest element in array. Then log that element to the console. How do we do this?
2.Write a for loop starting on line 4, with an if statement inside it.
3.Compare the first element of the array to the variable largest. If this element is bigger than largest, make largest equal to this element.
4.The loop will then start again. You will then compare the second element of the array to largest. And so on.
5.You will only change the value of the variable if the current array element you are looking at is greater than the variable value.
6.Your for loop will go through each array element and your variable will end up with the highest value in the array.*/

var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
// Write your code below!

for(var i = 0; i < array.length; i++ ){
	if(array[i] > largest) largest = array[i];
}



console.log(largest);
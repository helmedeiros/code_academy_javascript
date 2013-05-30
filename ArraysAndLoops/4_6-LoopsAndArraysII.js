// Ask a question on the Q&A Forum if you get stuck!
/*Loops and arrays II
It's time for you to write your own array and loop over the array. Remember to:

Put commas between each element in the array.
Put semi-colons between each bit of the for loop.
We suggest you use i as the iterator.
Beware of infinite loops!
Enjoy yourself while smashing through this coding!

INSTRUCTIONS
1.Create an array called names filled with 5 names.
2.Write a for loop that prints "I know someone called " followed by names[i]. Make sure there's a space between "called" and the name!
3.Run your code and the five sentences should print out.
*/

	var names = ['Hélio', 'Hana', 'Kenzo', 'Antônia', 'Fernanda'];
	for(var i = 0; i < names.length; i++){
		console.log('I know someone called ' + names[i]);
	}

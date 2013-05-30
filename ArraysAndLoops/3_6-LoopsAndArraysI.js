// Let's print out every element of an array using a for loop
/*
Loops and arrays I
Awesome job! You've now learned about arrays, and how to access one element of the array. But what if there were 100 elements in the array?

For arrays, a useful way to systematically access every element in the array is to use a for loop!

How does it work?

1. Line 3 declares the array. It has 4 elements.
2. We then start the for loop on line 5.
3. We see i starts off at value 0. 
4. The for loop runs until i < 4 (because cities.length equals 4. The array cities has 4 elements in it; see the Hint for more.)
5. We will increment i by 1 each time we loop over.
6. We print out cities[0], which is "Melbourne".
7. We then start the loop again. Except now i = 1. 
8. It will print out cities[1], which is "Amman". 
9. This continues until i is no longer less than cities.length.

INSTRUCTIONS
1.Change the elements in the cities array. You can put in as many elements as you like.
2.Run the for loop and see them all printed out!
*/

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Natal", "Porto Alegre"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
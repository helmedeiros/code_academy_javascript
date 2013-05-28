// Declare multiplied outside the function on line 3.
// This will mean it has global scope. 
var multiplied = 5;

var timesTwo = function(number) {
    
    var multiplied = number * 2;
    
};

timesTwo(4);

// We cant access the variable multipled! 
// Do something so line 15 will work!
console.log(multiplied);


/*jshint multistr:true 

Log it!
Perfect! You've now got the engine of your search program running. It will:

Loop through the array,
Compare each letter to the first letter of your name, and if it sees that letter:
It will push that letter and all the letters that follow it to an array, stopping when the number of letters it pushes are equal to the number of letters in your name.
INSTRUCTIONS
Under your existing code (and outside all your loops!), set up an if/else statement. If you don't have any hits, log "Your name wasn't found!" to the console. Otherwise, log the hits array to the console.*/
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, turpis at sodal \
, nulla dui egestas Helio urna, ut ultrices ligula elit semper magna. Vestibulum vitae eros turpis. Donec \
faucibus sodales dolor, id congue dolor tincidunt sed. Pellentesque ac nisi non erat ullamcorper \
sodales elementum id leo. Helio integer non dictum dui. Nulla facilisi. Curabitur facilisis, ullamcorper \
iaculis euismod, ante lorem egestas justo, eu imperdiet quam orci vitae nisi. Ut Helio tellus ut quam \
bibendum aliquam. Etiam ullamcorper, ante a euismod mattis, libero tellus vehicula tellus, a cursus \
tortor augue vel orci. Phasellus at vestibulum lectus.";

var myName = "Helio";
var hits = [];
for(var i = 0; i < text.length; i++){
    if(text[i] === myName[0] ){
        for(var j = i; j < (i+myName.length); j++){
            hits.push(text[j]);
        }
    }
}

if(hits.length === 0){
	print("Your name wasn't found!");
}else{
	print(hits);
}
var type = ["rock", "paper", "scissors"];

var validAnswer = function(answer){
    if(answer === "0" || answer === "1" || answer === "2"){ 
        return true;     
    }else{ 
        return false; 
        
    }
};

var rockPaperOrScissors = function(){
    var answer;
    
    do{
        var answer = prompt("0. Rock; 1. Paper. 2. Scissors");
    }while(!validAnswer(answer));    
    
    return answer;
};

var result = function(p1Choice,p2Choice){
	if(p1Choice > p2Choice) console.log("Player One is the winner!");
	else if(p2Choice > p1Choice) console.log("Player Two is the winner!");
	else if(p2Choice === p1Choice) console.log("Draw!");
};

var game = function(){
    var playerOneChoice = rockPaperOrScissors();
    console.log("Player One choosed:" + type[playerOneChoice]);
    
    var playerTwoChoice = rockPaperOrScissors();
    console.log("Player Two choosed:" + type[playerTwoChoice]);

	console.log(result(playerOneChoice,playerTwoChoice))
};
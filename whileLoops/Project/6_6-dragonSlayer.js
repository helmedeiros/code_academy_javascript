var hit = function(){
    return Math.floor(Math.random() * 2);
};


var slaying = true;
var youHit = hit();
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying){
    if(youHit){
		print("You hit the dragon and did " + damageThisRound + " damage!");
		totalDamage += damageThisRound;
		
		if(totalDamage >= 4){
			print("You slew the dragon");
			slaying = false;
		}else{
			youHit = hit();
		}
		
	}else{
		print("The dragon burninates you! You're toast.");
		slaying = false;
	}
}
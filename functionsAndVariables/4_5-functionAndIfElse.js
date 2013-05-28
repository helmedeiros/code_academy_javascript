// Write your function below. 
// Don't forget to call your function!
var creditCheck = function(income){
  if(income >= 100) return "You earn a lot of money! You qualify for a credit card.";
  
  return "Alas you do not qualify for a credit card. Capitalism is cruel like that.";
};

creditCheck(75);
creditCheck(125);
creditCheck(100);
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, turpis at sodal \
, nulla dui egestas Helio urna, ut ultrices ligula elit semper magna. Vestibulum vitae eros turpis. Donec \
faucibus sodales dolor, id congue dolor tincidunt sed. Pellentesque ac nisi non erat ullamcorper \
sodales elementum id leo. Helio integer non dictum dui. Nulla facilisi. Curabitur facilisis, ullamcorper \
iaculis euismod, ante lorem egestas justo, eu imperdiet quam orci vitae nisi. Ut Helio tellus ut quam \
bibendum aliquam. Etiam ullamcorper, ante a euismod mattis, libero tellus vehicula tellus, a cursus \
tortor augue vel orci. Phasellus at vestibulum lectus Helmed Helmed.";

var myName = "Helio";

var find = function(name, text){
	var hits = [];
	
	for(var i = 0; i < text.length; i++){
    	if(text[i] === myName[0] ){
			if(text.substr(i,myName.length) === myName){
        		for(var j = i; j < (i+myName.length); j++){
            		hits.push(text[j]);
        		}
			}
    	}
	}
	
	return hits;
}

var show = function(arrayNames){
	if(arrayNames.length === 0){
		print("Your name wasn't found!");
	}else{
		print(arrayNames);
	}
}

var foundNames = find(myName,text);
show(foundNames);
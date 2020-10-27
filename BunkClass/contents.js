setInterval(function() {
    
	var x = document.getElementsByClassName("wnPUne").item(0).outerText;
	
	
	if (parseInt(x) < 10){
	open(location, '_self').close();}
}, 60 * 250);

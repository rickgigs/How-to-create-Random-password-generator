var characters = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var password = '';


function GeneratePassword(plength){
	password='';
		for(i=0; i<plength; i++){
			password+=characters.charAt(Math.floor(Math.random()*characters.length));
		}
	
	return password;
}

function displayPassword(){
	var plength = document.getElementById('plength').value;
	document.getElementById('password').value = GeneratePassword(plength);
}

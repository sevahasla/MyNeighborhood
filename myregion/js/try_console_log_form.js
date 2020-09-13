function F(){
	var flag = 1;
	var x = document.getElementById("superform").value;
	if(flag == 1){
		document.getElementById("error").innerHTML = "";
		document.getElementById("superform").value = "";	
	}
	else{
		document.getElementById("error").innerHTML = "choose place!";
		return false;
	}
	if(x == ""){
		document.getElementById("error").innerHTML = "please, write anything!";
		return false;
	}
	else{
		console.log(x);
	}
	
}

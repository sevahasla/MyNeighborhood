var x = "Хочу построить фонтан к дню ВДВ!";
var cnt = 0; 
function MyPrint(){
	document.getElementById("post_place").innerHTML = x;
}

function MyIncreaseCnt(){
	cnt += 1;
	if(cnt % 10 >= 2){
		document.getElementById("Increase").innerHTML = String(cnt) + String(" помогут!");
	}
	else{
		document.getElementById("Increase").innerHTML = String(cnt) + String(" поможет!");
	}
}
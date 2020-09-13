var x = "Хочу построить ещё одну шаурмечную на углу!";
var cnt = 0; 
function MyPrint(){
	document.getElementById("post_place").innerHTML = x;
}

function MyIncreaseCnt(){
	document.getElementById("Increase").innerHTML = String(cnt + 1);
	cnt += 1;
}
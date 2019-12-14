var smsc = document.getElementById("smsc");
	var tips = document.getElementById("tips");
	var index1 = 1000;
	function next1(){
		index1--;
		if (index1 == -400){
			tips.style.left = "1000px";
			index1 = 1000;
		}
		animate(tips,{left:index1});
	}
	setInterval(next1,32);
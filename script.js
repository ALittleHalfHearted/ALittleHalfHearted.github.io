/* 
   Blacksmith Gaming menu toggle script 
   Filename: script.js
   HTML5 and CSS3 Illustrated Unit I, Lessons
 */

var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
	navButton.addEventListener("click", function() {
		var nav = document.querySelector(".sitenavigation ul");
		if (nav.style.display === "block") {
			nav.style.display = "";
		} else {
			nav.style.display = "block";
		}
	}, false);
}

const UNILET = ['A','B','C','D','E','F'];

var startButton = document.querySelector(".start-code");
if(startButton){
	startButton.addEventListener("click",function(){
		var demoValue = document.querySelector(".demo-value");
		var resultsBlock = document.querySelector(".demo");
		var uniString = ['',''];
		var num = Math.floor(Math.random() * 100) + 1;
		for(var i = 0;i < num;i++){
			let hold = '';
			var digitNum = Math.floor(Math.random() * 2) + 4;
			for(var x = 0;x < digitNum;x++){
				var letnum = Math.floor(Math.random() * 2);
				if(letnum == 1){
					let letter = Math.floor(Math.random() * 5);
					hold = hold + UNILET[letter];
				}
				else{
					hold = hold.toString() + Math.floor(Math.random() * 10);
				}
			}
			uniString[i] = String.fromCharCode(hold);
		}
	demoValue.textContent = uniString.toString().replace(/,/g,'');
	resultsBlock.className = "show";
	},false);
}

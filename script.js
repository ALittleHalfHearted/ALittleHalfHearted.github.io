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
			navButton.style.animation = "";
			navButton.style.transform = "rotate(0deg)";
		} else {
			navButton.style.animation = "navclick 1.5s ease-in-out";
			navButton.style.transform = "rotate(90deg)";
			nav.style.display = "block";
		}
	}, false);
}

var actClick = document.querySelector("#action");
if (actClick) {
	actClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-action");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var actAdvClick = document.querySelector("#actionadventure");
if (actAdvClick) {
	actAdvClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-actionadventure");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var advClick = document.querySelector("#adventure");
if (advClick) {
	advClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-adventure");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var rpgClick = document.querySelector("#roleplay");
if (rpgClick) {
	rpgClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-roleplay");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var simClick = document.querySelector("#simulation");
if (simClick) {
	simClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-simul");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var stratClick = document.querySelector("#strategy");
if (stratClick) {
	stratClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-strategy");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var sportClick = document.querySelector("#sports");
if (sportClick) {
	sportClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-sport");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
		}
	}, false);
}

var otherClick = document.querySelector("#other");
if (otherClick) {
	otherClick.addEventListener("click", function() {
		var show = document.querySelector("select#fav-other");
		if (show.style.display === "block") {
			show.style.display = "";
		} else {
			show.style.display = "block";
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
/* Intro Javascript */

let intro = document.getElementById("intro");
let battle = document.getElementById("battle");
let map = document.getElementById("map");

// Init none
battle.style.display = "none";
map.style.display = "none";

// Buttons
var startBtn = document.createElement("img");
intro.appendChild(startBtn);
startBtn.setAttribute("id", "start");
startBtn.setAttribute("class", "button");
startBtn.style.opacity = 0;

var creditBtn = document.createElement("img");
intro.appendChild(creditBtn);
creditBtn.setAttribute("id", "credit");
creditBtn.setAttribute("class", "button");
creditBtn.style.opacity = 0;

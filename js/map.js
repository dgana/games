/* Map Javascript */

let intro_m = document.getElementById("intro");
let battle_m = document.getElementById("battle");
let map_m = document.getElementById("map");

let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let level4 = document.getElementById("level4");
let level5 = document.getElementById("level5");
let level6 = document.getElementById("level6");
let level7 = document.getElementById("level7");

map_m.setAttribute("class", "general-background map");

// Init none
battle_m.style.display = "none";
map_m.style.display = "none";

// Buttons
var level1Btn = document.createElement("img");
level1Btn.setAttribute("id", "level-1");
level1Btn.setAttribute("class", "button");
level1Btn.setAttribute("src", "../asset/img/map/button_map.png");
map_m.appendChild(level1Btn);
level1Btn.style.opacity = 1;

var level2Btn = document.createElement("img");
level2Btn.setAttribute("id", "level-2");
level2Btn.setAttribute("class", "button");
level2Btn.setAttribute("src", "../asset/img/map/button_map.png");
map_m.appendChild(level2Btn);
level2Btn.style.opacity = 1;

// Event Listeners
level1Btn.addEventListener("click", function () {
  intro_m.style.display = "none";
  map_m.style.display = "none";
  level1.style.display = "block";
});

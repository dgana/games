/* Intro Javascript */

let intro_i = document.getElementById("intro");
let battle_i = document.getElementById("battle");
let map_i = document.getElementById("map");

intro_i.setAttribute("class", "general-background opening");

// Init none
battle_i.style.display = "none";
map_i.style.display = "none";

// Buttons
var startBtn = document.createElement("img");
startBtn.setAttribute("id", "start");
startBtn.setAttribute("class", "button");
startBtn.setAttribute("src", "asset/img/opening/c_start.png");
intro_i.appendChild(startBtn);
//startBtn.style.opacity = 0;

var creditBtn = document.createElement("img");
creditBtn.setAttribute("id", "credit");
creditBtn.setAttribute("class", "button");
creditBtn.setAttribute("src", "asset/img/opening/c_credit.png");
intro_i.appendChild(creditBtn);
//creditBtn.style.opacity = 0;

var midPanel = document.createElement("div");
midPanel.setAttribute("id", "mid-panel");
midPanel.setAttribute("class", "general-panel mid-panel")
var spanMidPanel = document.createElement("span");
spanMidPanel.setAttribute("id", "mid-panel-text");
spanMidPanel.setAttribute("class", "text");
var maleNinjaImg = document.createElement("img");
maleNinjaImg.setAttribute("src", "asset/img/character/gif/ninja_male_run.gif");
maleNinjaImg.setAttribute("id", "maleNinja");
spanMidPanel.appendChild(maleNinjaImg);
var femaleNinjaImg = document.createElement("img");
femaleNinjaImg.setAttribute("src", "asset/img/opening/n_f (9).gif");
femaleNinjaImg.setAttribute("id", "femaleNinja");
spanMidPanel.appendChild(femaleNinjaImg);
midPanel.appendChild(spanMidPanel);
intro.appendChild(midPanel);
midPanel.style.display = "none";

// Event Listeners
startBtn.addEventListener("click", function () {
  intro_i.style.display = "none";
  map_i.style.display = "block";
});

creditBtn.addEventListener("click", function () {
  intro_i.setAttribute("class", "general-background credit");
  startBtn.style.display = "none";
  creditBtn.style.display = "none";
  midPanel.style.display = "block";

  var backBtn = document.createElement("img");
  backBtn.setAttribute("id", "back");
  backBtn.setAttribute("class", "button");
  backBtn.setAttribute("src", "asset/img/opening/c_back.png");
  intro_i.appendChild(backBtn);

  backBtn.addEventListener("click", function () {
    intro_i.setAttribute("class", "general-background opening");
    startBtn.style.display = "block";
    creditBtn.style.display = "block";
    backBtn.style.display = "none";
    midPanel.style.display = "none";
  });


});

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
startBtn.setAttribute("src", "asset/img/opening/c_start_plank.png");
intro_i.appendChild(startBtn);
startBtn.style.opacity = 0;

var creditBtn = document.createElement("img");
creditBtn.setAttribute("id", "credit");
creditBtn.setAttribute("class", "button");
creditBtn.setAttribute("src", "asset/img/opening/c_credit_plank.png");
intro_i.appendChild(creditBtn);
creditBtn.style.opacity = 0;

var midPanel = document.createElement("div");
midPanel.setAttribute("id", "mid-panel");
midPanel.setAttribute("class", "general-panel mid-panel")
var spanMidPanel = document.createElement("span");
spanMidPanel.setAttribute("id", "mid-panel-text");
spanMidPanel.setAttribute("class", "text");

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
  var midPanelText = document.getElementById("mid-panel-text");
  midPanelText.innerHTML = "<h4>Designer:</h4>" + "<p>Irwin Pratajaya, Fadly Kayo, Ida Bagus Chahya Dhegana</p>" + "<h4>Programmer:</h4>" + "<p>Yoma Sofwan, Ida Bagus Chahya Dhegana, Fadly Kayo</p>" + "<h4>Sound Engineer:</h4>" + "<p>Ida Bagus Chahya Dhegana</p>" + "<h4>Story:</h4>" + "<p>Isumi Karinaningsih</p>";

  var backBtn = document.createElement("img");
  backBtn.setAttribute("id", "back");
  backBtn.setAttribute("class", "button");
  backBtn.setAttribute("src", "asset/img/opening/c_back_plank.png");
  intro_i.appendChild(backBtn);
  backBtn.style.opacity = 0;

  backBtn.addEventListener("click", function () {
    intro_i.setAttribute("class", "general-background opening");
    startBtn.style.display = "block";
    creditBtn.style.display = "block";
    backBtn.style.display = "none";
    midPanel.style.display = "none";
  });


});

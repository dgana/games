/* Battle Javascript */

let battle = document.getElementById('battle');
let map = document.getElementById('map');

// battle.className = 'background-arena1';
        
for(let i = 1; i < 8; i++){
    let createLevel = document.createElement('div');
    createLevel.setAttribute('id','level'+i);
    createLevel.setAttribute('class','background-arena'+i);
    battle.appendChild(createLevel);
}

let level1 = document.getElementById('level1');
let level2 = document.getElementById('level2');
let level3 = document.getElementById('level3');
let level4 = document.getElementById('level4');
let level5 = document.getElementById('level5');
let level6 = document.getElementById('level6');
let level7 = document.getElementById('level7');


var enPlayer     = 1000;
var enMonster    = 1000;
var enPlayerText = enPlayer;
var enMonsterText = enMonster;
var barPlayer = enPlayer;
var barMonster = enMonster;
arrSoal = [];
for(let i=0 ; i<10 ; i++){
    arrSoal.push([]);
    let x = Math.floor((Math.random() * 100) + 33)
    let y = Math.floor((Math.random() * 100) + 33)
    let z = x+y;
    pilihan1 = z+10;
    pilihan2 = z-10;
    pilihan3 = z+5;
    if(z % 2 === 0){
        pilihan1 = z+20;
        pilihan2 = z-10;
        pilihan3 = z+15;
    };
    if(z % 3 === 0){
        pilihan1 = z-20;
        pilihan2 = z+10;
        pilihan3 = z-5;
    };  
    arrSoal[i].push(x+' + '+y);
    arrSoal[i].push(z.toString());
    arrSoal[i].push(z.toString());
    arrSoal[i].push(pilihan3);
    arrSoal[i].push(pilihan1);
    arrSoal[i].push(pilihan2);
};          

for(let i=10 ; i<20 ; i++){
    arrSoal.push([]);
    let x = Math.floor((Math.random() * 300) + 3)
    let y = Math.floor((Math.random() * 300) + 3)
    let z = x-y;
    pilihan1 = z+10;
    pilihan2 = z-10;
    pilihan3 = z+5;
    if(z % 2 === 0){
        pilihan1 = z-20;
        pilihan2 = z+10;
        pilihan3 = z-5;
    };
    if(z % 3 === 0){
        pilihan1 = z+20;
        pilihan2 = z-10;
        pilihan3 = z+15;
    };  
    arrSoal[i].push(x+' - '+y);
    arrSoal[i].push(z.toString());
    arrSoal[i].push(z.toString());
    arrSoal[i].push(pilihan3);
    arrSoal[i].push(pilihan1);
    arrSoal[i].push(pilihan2);
};
function acak(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
};

arrSoal = acak(arrSoal);

let createBattle = document.createElement('div');
createBattle.setAttribute('class', 'arena');
level1.appendChild(createBattle);

let arena = document.getElementsByClassName('arena')[0];
let createPlayer = document.createElement('div');
createPlayer.setAttribute('class', 'player');
arena.appendChild(createPlayer);

let createMonster = document.createElement('div');
createMonster.setAttribute('class', 'monster');
arena.appendChild(createMonster);

// Create Question Box!
let createQuestion = document.createElement('div');
createQuestion.setAttribute('id', 'question');
arena.appendChild(createQuestion);

let question = document.getElementById('question');
question.innerHTML = arrSoal[0][0];


setTimeout(function() {
    question.style.fontSize = '46px';
}, 1000);

setInterval(function() {
    question.style.fontSize = '44px';
    setTimeout(function() {
        question.style.fontSize = '46px';
    }, 1000);
}, 2000);

// Create Timer Box!
let createTimer = document.createElement('div');
createTimer.setAttribute('id', 'timer');
arena.appendChild(createTimer);

function hitungWaktu(){

    let timer = document.getElementById('timer');
    timer.innerHTML = '10';

    let x = 1

    timer.style.visibility = 'visible';
    timer.style.opacity = '1';
    timer.style.fontSize = '102px';

    setTimeout(function() {
        timer.style.visibility = 'hidden';
        timer.style.opacity = '0';
        timer.style.fontSize = '76px';
    }, 600);

    hentikanWaktu = setInterval(function() {
        timer.style.visibility = 'visible';
        timer.style.opacity = '1';
        timer.style.fontSize = '102px';

        timer.innerHTML = '10' - x;

        setTimeout(function() {
            timer.style.visibility = 'hidden';
            timer.style.opacity = '0';
            timer.style.fontSize = '76px';
        }, 600);

        if (timer.innerHTML === '0') {
            timer.innerHTML = '10'
            x = 0;
        }
        x++
    }, 1000);
};
hitungWaktu();
// Player Status Box!
let player = document.getElementsByClassName('player')[0];
let createPlayerStatus = document.createElement('div');
createPlayerStatus.setAttribute('class', 'player-status');
player.appendChild(createPlayerStatus);

let playerStatus = document.getElementsByClassName('player-status')[0];
let createPlayerName = document.createElement('p');
createPlayerName.setAttribute('id', 'player-name');
playerStatus.appendChild(createPlayerName);
let createPlayerNameText = document.createTextNode('Goemon');
createPlayerName.appendChild(createPlayerNameText);

let createPlayerHealthBar = document.createElement('progress');
createPlayerHealthBar.setAttribute('max', enPlayerText);
createPlayerHealthBar.setAttribute('value', barPlayer);
createPlayerHealthBar.setAttribute('id', 'player-health-bar');
playerStatus.appendChild(createPlayerHealthBar);

let createPlayerHealthStatus = document.createElement('p');
createPlayerHealthStatus.setAttribute('id', 'player-health-status');
playerStatus.appendChild(createPlayerHealthStatus);
let createPlayerHealthStatusText = document.createTextNode(1000 + ' / ' + 1000)
createPlayerHealthStatus.appendChild(createPlayerHealthStatusText);

// Monster Status Box!
let monster = document.getElementsByClassName('monster')[0];
let createMonsterStatus = document.createElement('div');
createMonsterStatus.setAttribute('class', 'monster-status');
monster.appendChild(createMonsterStatus);

let monsterStatus = document.getElementsByClassName('monster-status')[0];
let createMonsterName = document.createElement('p');
createMonsterName.setAttribute('id', 'monster-name');
monsterStatus.appendChild(createMonsterName);
let createMonsterNameText = document.createTextNode('Zombie')
createMonsterName.appendChild(createMonsterNameText);

let createMonsterHealthBar = document.createElement('progress');
createMonsterHealthBar.setAttribute('max', enMonsterText);
createMonsterHealthBar.setAttribute('value', barMonster);
createMonsterHealthBar.setAttribute('id', 'monster-health-bar');
monsterStatus.appendChild(createMonsterHealthBar);

let createMonsterHealthStatus = document.createElement('p');
createMonsterHealthStatus.setAttribute('id', 'monster-health-status');
monsterStatus.appendChild(createMonsterHealthStatus);
let createMonsterHealthStatusText = document.createTextNode(1000 + ' / ' + 1000)
createMonsterHealthStatus.appendChild(createMonsterHealthStatusText);

// Create Ninja Avatar!
let createPlayerAvatar = document.createElement('div');
createPlayerAvatar.setAttribute('class', 'player-avatar');
player.appendChild(createPlayerAvatar);

let playerAvatarBox = document.getElementsByClassName('player-avatar')[0];
let createPlayerAvatarImage = document.createElement('img');
createPlayerAvatarImage.setAttribute('id', 'player-avatar-idle');
playerAvatarBox.appendChild(createPlayerAvatarImage);

let playerAvatarIdle = document.getElementById('player-avatar-idle');
playerAvatarIdle.src = "asset/img/character/gif/ninja_male_idle.gif"

// Create Zombie Avatar!
let createMonsterAvatar = document.createElement('div');
createMonsterAvatar.setAttribute('class', 'monster-avatar');
monster.appendChild(createMonsterAvatar);

let monsterAvatarBox = document.getElementsByClassName('monster-avatar')[0];
let createMonsterAvatarImage = document.createElement('img');
createMonsterAvatarImage.setAttribute('id', 'monster-avatar-idle');
monsterAvatarBox.appendChild(createMonsterAvatarImage);

let monsterAvatarIdle = document.getElementById('monster-avatar-idle');
monsterAvatarIdle.src = "asset/img/character/gif/zombie_male_idle.gif"

// Create Player Hit Damage Box
let createPlayerHitDamageBox = document.createElement('div');
createPlayerHitDamageBox.setAttribute('id', 'player-hit-damage-box');
player.appendChild(createPlayerHitDamageBox);

let createMonsterHitDamageBox = document.createElement('div');
createMonsterHitDamageBox.setAttribute('id', 'monster-hit-damage-box');
monster.appendChild(createMonsterHitDamageBox);

let playerHitDamageBox = document.getElementById('player-hit-damage-box');
let monsterHitDamageBox = document.getElementById('monster-hit-damage-box');

let createHitDamageParagraph = document.createElement('p');
createHitDamageParagraph.setAttribute('id', 'player-hit-damage');
playerHitDamageBox.appendChild(createHitDamageParagraph);

createHitDamageParagraph = document.createElement('p');
createHitDamageParagraph.setAttribute('id', 'monster-hit-damage');
monsterHitDamageBox.appendChild(createHitDamageParagraph);

let playerHitDamage = document.getElementById('player-hit-damage');
let monsterHitDamage = document.getElementById('monster-hit-damage');

// Create Answer Box & Answer Buttons!
let createAnswerButton = document.createElement('div');
createAnswerButton.setAttribute('class', 'answer-button');
arena.appendChild(createAnswerButton);

let answerButton = document.getElementsByClassName('answer-button')[0];

for(let i=1 ; i<5 ; i++){
    createGameButton = document.createElement('button');
    createGameButton.setAttribute('class', 'game-button');
    createGameButton.setAttribute('id', 'answer-button-'+i);
    answerButton.appendChild(createGameButton);
}

let gameButton = document.getElementsByClassName('game-button');
let answerButton1 = document.getElementById('answer-button-1');
let answerButton2 = document.getElementById('answer-button-2');
let answerButton3 = document.getElementById('answer-button-3');
let answerButton4 = document.getElementById('answer-button-4');

function soalAwal(){

    document.getElementById('player-health-status').innerHTML = enPlayerText+' / '+enPlayer;
    document.getElementById('monster-health-status').innerHTML = enMonsterText+' / '+enMonster;
    for(let i=0 ; i<4 ; i++){
        let x = i+1;
        document.getElementById('answer-button-'+x).innerHTML=arrSoal[0][i+2];
    };
    soalInti();
};

function soalInti(){
    let i=0;            
    function lanjut(){
        document.getElementById('question').innerHTML=arrSoal[i+1][0];
        var tam1, tam2, tam3, tam4;
        function calculate() {
            do {
                tam1 = Math.floor((Math.random() * 4));
                tam2 = Math.floor((Math.random() * 4));
                tam3 = Math.floor((Math.random() * 4));
                tam4 = Math.floor((Math.random() * 4));
            }  
            while (tam1 == tam2 || tam1 == tam3 || tam1 == tam4 || tam2 == tam3 || tam2 == tam4 || tam3 == tam4);  
        }
        calculate();

        document.getElementById('player-health-status').innerHTML = enPlayerText+' / '+enPlayer;
        document.getElementById('monster-health-status').innerHTML = enMonsterText+' / '+enMonster;
        document.getElementById('player-health-bar').value = barPlayer;
        document.getElementById('player-health-bar').style.color = 'red';
        document.getElementById('monster-health-bar').value = barMonster;
        document.getElementById('answer-button-1').innerHTML=arrSoal[i+1][tam1+2];
        document.getElementById('answer-button-2').innerHTML=arrSoal[i+1][tam2+2];
        document.getElementById('answer-button-3').innerHTML=arrSoal[i+1][tam3+2];
        document.getElementById('answer-button-4').innerHTML=arrSoal[i+1][tam4+2];
        if(i<arrSoal.length-1){
            i++;
        };
        hentiTimeout = setTimeout(function(){
                phit = Math.floor((Math.random() * 100) + 30)
                console.log('Mons+er defense '+phit);
                enPlayer = enPlayer-phit;
                barPlayer = barPlayer-phit;

                for(let j=0 ; j<4 ; j++){
                    if (arrSoal[i][1] === document.getElementById('answer-button-'+[j+1]).innerHTML){
                        document.getElementById('answer-button-'+[j+1]).style.backgroundColor = 'rgb(66, 131, 63)';
                    }                       
                    gameButton[j].setAttribute('disabled', 'disabled');
                    gameButton[j].style.cursor = 'wait';
                }

                playerHitDamage.style.visibility = 'visible';
                playerHitDamage.style.opacity = '1';
                playerHitDamage.style.bottom = '40px';

                playerHitDamage.innerHTML = phit+' dmg!';   
                
                setTimeout(function() {
                    playerHitDamage.style.visibility = 'hidden';
                    playerHitDamage.style.opacity = '0';

                }, 1000);

                setTimeout(function() {
                    playerHitDamage.style.bottom = '5px';
                    playerHitDamage.innerHTML = '';

                }, 1400);

                setTimeout(function() {

                    for(let j=0 ; j<4 ; j++){
                        document.getElementById('answer-button-'+[j+1]).style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
                        gameButton[j].removeAttribute('disabled');
                        gameButton[j].style.cursor = 'pointer';
                    }

                }, 1500);               
                if(enMonster<=0 || enPlayer<=0){
                    clearTimeout(hentiTimeout); 
                    clearInterval(hentikanWaktu);
                    battle.style.display = 'none';
                    map.style.display = 'block';
                };

                lanjut();
        }, 10000);              
    };
    lanjut();

    for(let j=0 ; j<4 ; j++){
        document.getElementById('answer-button-'+[j+1]).addEventListener('click', function() {
            clearTimeout(hentiTimeout); 
            clearInterval(hentikanWaktu);       

            let jawab = [0,1,2,3];
            jawab[j] = document.getElementById('answer-button-'+[j+1]).innerHTML;
            if(jawab[j] === arrSoal[i][1]){
                var mhit = Math.floor((Math.random() * 100) + 30)
                console.log('Power hit '+mhit);
                enMonster = enMonster-mhit;                 
                barMonster = barMonster-mhit;
            }
            else{
                document.getElementById('answer-button-'+[j+1]).style.backgroundColor = 'rgb(189, 60, 60)';
                var phit = Math.floor((Math.random() * 100) + 30)
                console.log('Mons+er defense '+phit);
                enPlayer = enPlayer-phit;                       
                barPlayer = barPlayer-phit;
            }

            for(let j=0 ; j<4 ; j++){
                if (arrSoal[i][1] === document.getElementById('answer-button-'+[j+1]).innerHTML){
                    document.getElementById('answer-button-'+[j+1]).style.backgroundColor = 'rgb(66, 131, 63)';
                }                       
                gameButton[j].setAttribute('disabled', 'disabled');
                gameButton[j].style.cursor = 'wait';
            }

            playerHitDamage.style.visibility = 'visible';
            playerHitDamage.style.opacity = '1';
            playerHitDamage.style.bottom = '40px';

            monsterHitDamage.style.visibility = 'visible';
            monsterHitDamage.style.opacity = '1';
            monsterHitDamage.style.bottom = '40px';

            if(mhit>0){
                monsterHitDamage.innerHTML = mhit+' dmg!';
            };
            if(phit>0){
                playerHitDamage.innerHTML = phit+' dmg!';   
            };
            
            setTimeout(function() {
                playerHitDamage.style.visibility = 'hidden';
                playerHitDamage.style.opacity = '0';

                monsterHitDamage.style.visibility = 'hidden';
                monsterHitDamage.style.opacity = '0';
            }, 1000);

            setTimeout(function() {
                playerHitDamage.style.bottom = '5px';
                playerHitDamage.innerHTML = '';

                monsterHitDamage.style.bottom = '5px';
                monsterHitDamage.innerHTML = '';
            }, 1400);

            setTimeout(function() {

                for(let j=0 ; j<4 ; j++){
                    document.getElementById('answer-button-'+[j+1]).style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
                    gameButton[j].removeAttribute('disabled');
                    gameButton[j].style.cursor = 'pointer';
                }

                lanjut();
                hitungWaktu();
            }, 1500);

            if(enMonster<=0 || enPlayer<=0){ 
                clearTimeout(hentiTimeout); 
                clearInterval(hentikanWaktu);
                battle.style.display = 'none';
                map.style.display = 'block';
                // alert('GAME OVER');
            };
        });
    };
};

//MULAI GAMEEEEEEEE!
soalAwal();
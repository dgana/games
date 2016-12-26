/* Battle Javascript */

let battle = document.getElementById('battle');

battle.className = 'background-arena1';

let createBattle = document.createElement('div');
createBattle.setAttribute('class', 'arena');
battle.appendChild(createBattle);

let arena = document.getElementsByClassName('arena')[0];
let createPlayer = document.createElement('div');
createPlayer.setAttribute('class', 'player');
arena.appendChild(createPlayer);

let createMonster = document.createElement('div');
createMonster.setAttribute('class', 'monster');
arena.appendChild(createMonster);

let createQuestion = document.createElement('div');
createQuestion.setAttribute('class', 'question');
arena.appendChild(createQuestion);

let question = document.getElementsByClassName('question')[0];
question.innerHTML = '100 + 80 = ?';

// Player Status Box!
let player = document.getElementsByClassName('player')[0];
let createPlayerStatus = document.createElement('div');
createPlayerStatus.setAttribute('class', 'player-status');
player.appendChild(createPlayerStatus);

let playerStatus = document.getElementsByClassName('player-status')[0];
let createPlayerName = document.createElement('p');
createPlayerName.setAttribute('id', 'player-name');
playerStatus.appendChild(createPlayerName);
let createPlayerNameText = document.createTextNode('Male Ninja');
createPlayerName.appendChild(createPlayerNameText);

let createPlayerHealthBar = document.createElement('progress');
createPlayerHealthBar.setAttribute('max', 100);
createPlayerHealthBar.setAttribute('value', 90);
createPlayerHealthBar.setAttribute('id', 'player-health-bar');
playerStatus.appendChild(createPlayerHealthBar);

let createPlayerHealthStatus = document.createElement('p');
createPlayerHealthStatus.setAttribute('id', 'player-health-status');
playerStatus.appendChild(createPlayerHealthStatus);
let createPlayerHealthStatusText = document.createTextNode(1000 + ' / ' + 1000)
createPlayerHealthStatus.appendChild(createPlayerHealthStatusText);

let createPlayerTextBox = document.createElement('div');
createPlayerTextBox.setAttribute('class', 'player-text-box');
playerStatus.appendChild(createPlayerTextBox);

let playerTextBox = document.getElementsByClassName('player-text-box')[0];
let createPlayerTextParagraph = document.createElement('p');
createPlayerTextParagraph.setAttribute('id', 'player-text-status');
playerTextBox.appendChild(createPlayerTextParagraph);

let playerTextStatus = document.getElementById('player-text-status');
playerTextStatus.innerHTML = 'Ninja attack damage: 151 dmg!';





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
createMonsterHealthBar.setAttribute('max', 100);
createMonsterHealthBar.setAttribute('value', 80);
createMonsterHealthBar.setAttribute('id', 'monster-health-bar');
monsterStatus.appendChild(createMonsterHealthBar);

let createMonsterHealthStatus = document.createElement('p');
createMonsterHealthStatus.setAttribute('id', 'monster-health-status');
monsterStatus.appendChild(createMonsterHealthStatus);
let createMonsterHealthStatusText = document.createTextNode(1000 + ' / ' + 1000)
createMonsterHealthStatus.appendChild(createMonsterHealthStatusText);

let createMonsterTextBox = document.createElement('div');
createMonsterTextBox.setAttribute('class', 'monster-text-box');
monsterStatus.appendChild(createMonsterTextBox);

let monsterTextBox = document.getElementsByClassName('monster-text-box')[0];
let createMonsterTextParagraph = document.createElement('p');
createMonsterTextParagraph.setAttribute('id', 'monster-text-status');
monsterTextBox.appendChild(createMonsterTextParagraph);

let monsterTextStatus = document.getElementById('monster-text-status');
monsterTextStatus.innerHTML = 'Zombie attack damage: 111 dmg!';


let createPlayerAvatar = document.createElement('div');
createPlayerAvatar.setAttribute('class', 'player-avatar');
player.appendChild(createPlayerAvatar);

let playerAvatarBox = document.getElementsByClassName('player-avatar')[0];
let createPlayerAvatarImage = document.createElement('img');
createPlayerAvatarImage.setAttribute('id', 'player-avatar-image');
playerAvatarBox.appendChild(createPlayerAvatarImage);

let playerAvatarImage = document.getElementById('player-avatar-image');

function ninjaIdle() {
    z = (z === ninjaIdleImages.length - 1) ? 0 : z + 1;
    playerAvatarImage.src = ninjaIdleImages[z];
}

let ninjaIdleImages = [
        "asset/img/character/ninja/male/Idle__000.png",
        "asset/img/character/ninja/male/Idle__001.png",
        "asset/img/character/ninja/male/Idle__002.png",
        "asset/img/character/ninja/male/Idle__003.png",
        "asset/img/character/ninja/male/Idle__004.png",
        "asset/img/character/ninja/male/Idle__005.png",
        "asset/img/character/ninja/male/Idle__006.png",
        "asset/img/character/ninja/male/Idle__007.png",
        "asset/img/character/ninja/male/Idle__008.png",
        "asset/img/character/ninja/male/Idle__009.png"
    ],
    z = -1;

function startNinjaIdle() {
    setInterval(ninjaIdle, 80);
}
startNinjaIdle();


let createMonsterAvatar = document.createElement('div');
createMonsterAvatar.setAttribute('class', 'monster-avatar');
monster.appendChild(createMonsterAvatar);

let monsterAvatarBox = document.getElementsByClassName('monster-avatar')[0];
let createMonsterAvatarImage = document.createElement('img');
createMonsterAvatarImage.setAttribute('id', 'monster-avatar-image');
monsterAvatarBox.appendChild(createMonsterAvatarImage);

let monsterAvatarImage = document.getElementById('monster-avatar-image');

function zombieIdle() {
    y = (y === zombieIdleImages.length - 1) ? 0 : y + 1;
    monsterAvatarImage.src = zombieIdleImages[y];
}

let zombieIdleImages = [
        "asset/img/character/zombie/male/Idle (1).png",
        "asset/img/character/zombie/male/Idle (2).png",
        "asset/img/character/zombie/male/Idle (3).png",
        "asset/img/character/zombie/male/Idle (4).png",
        "asset/img/character/zombie/male/Idle (5).png",
        "asset/img/character/zombie/male/Idle (6).png",
        "asset/img/character/zombie/male/Idle (7).png",
        "asset/img/character/zombie/male/Idle (8).png",
        "asset/img/character/zombie/male/Idle (9).png",
        "asset/img/character/zombie/male/Idle (10).png",
        "asset/img/character/zombie/male/Idle (11).png",
        "asset/img/character/zombie/male/Idle (12).png",
        "asset/img/character/zombie/male/Idle (13).png",
        "asset/img/character/zombie/male/Idle (14).png",
        "asset/img/character/zombie/male/Idle (15).png",
    ],
    y = -1;

function startZombieIdle() {
    setInterval(zombieIdle, 60);
}
startZombieIdle();




// Create Answer Box & Answer Buttons!
let createAnswerButton = document.createElement('div');
createAnswerButton.setAttribute('class', 'answer-button');
arena.appendChild(createAnswerButton);

let answerButton = document.getElementsByClassName('answer-button')[0];
let createGameButton = document.createElement('button');
createGameButton.setAttribute('class', 'game-button');
createGameButton.setAttribute('id', 'answer-button-1');
answerButton.appendChild(createGameButton);

createGameButton = document.createElement('button');
createGameButton.setAttribute('class', 'game-button');
createGameButton.setAttribute('id', 'answer-button-2');
answerButton.appendChild(createGameButton);

createGameButton = document.createElement('button');
createGameButton.setAttribute('class', 'game-button');
createGameButton.setAttribute('id', 'answer-button-3');
answerButton.appendChild(createGameButton);

createGameButton = document.createElement('button');
createGameButton.setAttribute('class', 'game-button');
createGameButton.setAttribute('id', 'answer-button-4');
answerButton.appendChild(createGameButton);

let gameButton = document.getElementsByClassName('game-button');
let answerButton1 = document.getElementById('answer-button-1');
let answerButton2 = document.getElementById('answer-button-2');
let answerButton3 = document.getElementById('answer-button-3');
let answerButton4 = document.getElementById('answer-button-4');

let createAnswerButton1Text = document.createTextNode('78');
answerButton1.appendChild(createAnswerButton1Text);
let createAnswerButton2Text = document.createTextNode('280');
answerButton2.appendChild(createAnswerButton2Text);
let createAnswerButton3Text = document.createTextNode('172');
answerButton3.appendChild(createAnswerButton3Text);
let createAnswerButton4Text = document.createTextNode('180');
answerButton4.appendChild(createAnswerButton4Text);

answerButton1.addEventListener('click', function(e) {
    answerButton1.style.backgroundColor = 'rgb(189, 60, 60)';
    answerButton4.style.backgroundColor = 'rgb(66, 131, 63)';

    gameButton[0].setAttribute('disabled', 'disabled');
    gameButton[1].setAttribute('disabled', 'disabled');
    gameButton[2].setAttribute('disabled', 'disabled');
    gameButton[3].setAttribute('disabled', 'disabled');

    gameButton[0].style.cursor = 'wait';
    gameButton[1].style.cursor = 'wait';
    gameButton[2].style.cursor = 'wait';
    gameButton[3].style.cursor = 'wait';

    setTimeout(function() {
        answerButton1.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
        answerButton4.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';

        gameButton[0].removeAttribute('disabled');
        gameButton[1].removeAttribute('disabled');
        gameButton[2].removeAttribute('disabled');
        gameButton[3].removeAttribute('disabled');

        gameButton[0].style.cursor = 'pointer';
        gameButton[1].style.cursor = 'pointer';
        gameButton[2].style.cursor = 'pointer';
        gameButton[3].style.cursor = 'pointer';
    }, 1500);
});


answerButton2.addEventListener('click', function(e) {
    answerButton2.style.backgroundColor = 'rgb(189, 60, 60)';
    answerButton4.style.backgroundColor = 'rgb(66, 131, 63)';

    gameButton[0].setAttribute('disabled', 'disabled');
    gameButton[1].setAttribute('disabled', 'disabled');
    gameButton[2].setAttribute('disabled', 'disabled');
    gameButton[3].setAttribute('disabled', 'disabled');

    gameButton[0].style.cursor = 'wait';
    gameButton[1].style.cursor = 'wait';
    gameButton[2].style.cursor = 'wait';
    gameButton[3].style.cursor = 'wait';

    setTimeout(function() {
        answerButton2.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
        answerButton4.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';

        gameButton[0].removeAttribute('disabled');
        gameButton[1].removeAttribute('disabled');
        gameButton[2].removeAttribute('disabled');
        gameButton[3].removeAttribute('disabled');

        gameButton[0].style.cursor = 'pointer';
        gameButton[1].style.cursor = 'pointer';
        gameButton[2].style.cursor = 'pointer';
        gameButton[3].style.cursor = 'pointer';
    }, 1500);
});

answerButton3.addEventListener('click', function(e) {
    answerButton3.style.backgroundColor = 'rgb(189, 60, 60)';
    answerButton4.style.backgroundColor = 'rgb(66, 131, 63)';

    gameButton[0].setAttribute('disabled', 'disabled');
    gameButton[1].setAttribute('disabled', 'disabled');
    gameButton[2].setAttribute('disabled', 'disabled');
    gameButton[3].setAttribute('disabled', 'disabled');

    gameButton[0].style.cursor = 'wait';
    gameButton[1].style.cursor = 'wait';
    gameButton[2].style.cursor = 'wait';
    gameButton[3].style.cursor = 'wait';

    setTimeout(function() {
        answerButton3.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
        answerButton4.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
        answerButton.setAttribute('disabled', 'false');

        gameButton[0].removeAttribute('disabled');
        gameButton[1].removeAttribute('disabled');
        gameButton[2].removeAttribute('disabled');
        gameButton[3].removeAttribute('disabled');

        gameButton[0].style.cursor = 'pointer';
        gameButton[1].style.cursor = 'pointer';
        gameButton[2].style.cursor = 'pointer';
        gameButton[3].style.cursor = 'pointer';
    }, 1500);
});

answerButton4.addEventListener('click', function(e) {
    answerButton4.style.backgroundColor = 'rgb(66, 131, 63)';

    gameButton[0].setAttribute('disabled', 'disabled');
    gameButton[1].setAttribute('disabled', 'disabled');
    gameButton[2].setAttribute('disabled', 'disabled');
    gameButton[3].setAttribute('disabled', 'disabled');

    gameButton[0].style.cursor = 'wait';
    gameButton[1].style.cursor = 'wait';
    gameButton[2].style.cursor = 'wait';
    gameButton[3].style.cursor = 'wait';

    setTimeout(function() {
        answerButton4.style.backgroundColor = 'rgba(167, 167, 167, 0.8)';
        answerButton.setAttribute('disabled', 'false');

        gameButton[0].removeAttribute('disabled');
        gameButton[1].removeAttribute('disabled');
        gameButton[2].removeAttribute('disabled');
        gameButton[3].removeAttribute('disabled');

        gameButton[0].style.cursor = 'pointer';
        gameButton[1].style.cursor = 'pointer';
        gameButton[2].style.cursor = 'pointer';
        gameButton[3].style.cursor = 'pointer';
    }, 1500);
});

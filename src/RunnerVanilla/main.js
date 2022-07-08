let livesHtml = document.getElementById("lives");
let clawsHtml = document.getElementById("claws");
let startButton = document.getElementById("start");
let character = document.getElementById("character");
let jumping;
let gameOver;
let lives;
let takingDamage;
let canJump;
let enemies;
let claws;
let clawsCollected;
let clawsToWin;
let intervalId;

startButton.addEventListener("click", () => {
    lives = 3;
    clawsToWin = 3;
    clawsCollected = 0;
    canJump = true;
    gameOver = false;
    jumping = false;
    takingDamage = false;
    removeAllEntities();
    livesHtml.innerHTML = lives;
    clawsHtml.innerHTML = clawsCollected;
    createEnemy();
    createClaw();
    intervalId = setInterval(gameLoop, 50);
    changePauseables("running");
    character.className = "running";
    startButton.style.display = "none";
});

window.addEventListener("keydown", (event) => {
    if (gameOver) return;
    if (event.key === "ArrowUp" && !jumping && canJump) {
        character.className = "jumping";
        jumping = true;
        setTimeout(() => {
            if (gameOver) return;
            character.className = "running";
            jumping = false;
        }, 1125)
    }
});

function gameLoop() {
    enemies.forEach(enemy => {
        var distance = character.offsetLeft - enemy.offsetLeft;
        if ((enemy.classList.contains("skull") && distance > -150 && distance < 20 && jumping) ||
            (enemy.classList.contains("horse") && distance > -180 && distance < 70 && !jumping)){
            enemyTouchingPlayer();
        }
        if (enemy.offsetLeft < -200){
            enemies.pop(enemy);
        }
    });
    claws.forEach(claw => {
        var distance = character.offsetLeft - claw.offsetLeft;
        if ((distance > -150 && distance < 20)) {
            clawTouchingPlayer(claw);
        }
        if (claw.offsetLeft < -200){
            claws.pop(claw);
        }
    });
}

function createEnemy() {
    if (gameOver) return;
    var randomTime = Math.floor(Math.random() * 3000) + 1000;
    var randomEnemy = Math.floor(Math.random() * 2);
    const newDiv = document.createElement("div");
    if (randomEnemy == 1)
        newDiv.classList.add('skull');
    else
        newDiv.classList.add('horse');
    newDiv.dataset.pauseable = "";
    document.querySelector(".runner-container").appendChild(newDiv);
    enemies.push(newDiv);
    setTimeout(() => { createEnemy() }, randomTime);
}

function createClaw() {
    if (gameOver) return;
    var randomTime = Math.floor(Math.random() * 5000) + 5000;
    var randomPosition = Math.floor(Math.random() * 2);
    const newDiv = document.createElement("div");
    newDiv.classList.add('claw');
    if (randomPosition == 1)
        newDiv.style.bottom = "100px";
    else
        newDiv.style.bottom = "225px";
    newDiv.dataset.pauseable = "";
    document.querySelector(".runner-container").appendChild(newDiv);
    claws.push(newDiv);
    setTimeout(() => { createClaw() }, randomTime);
}

function enemyTouchingPlayer() {
    if (!takingDamage){
        lives--;
        livesHtml.innerHTML = lives;
        if (lives <= 0){
            finishGame("dying");
        } else {
            takingDamage = true;
            canJump = false;
            character.className = "taking-damage";
            setTimeout(() => {
                if (gameOver) return;
                character.className = "running";
                canJump = true;
            }, 250);
            setTimeout(() => {
                if (gameOver) return;
                takingDamage = false;
            }, 800);
        }
    }
}

function clawTouchingPlayer(claw) {
    clawsCollected++;
    clawsHtml.innerHTML = clawsCollected;
    claw.className = "claw taking";
    claws.pop(claw);
    if (clawsCollected >= clawsToWin){
        finishGame("attacking");
    }
}

function finishGame(characterAnimation) {
    gameOver = true;
    clearInterval(intervalId);
    changePauseables("paused");
    removeAllEntities();
    character.className = characterAnimation;
    character.style.animationPlayState = 'running';
    startButton.innerHTML = "Volver a jugar";
    startButton.style.display = "initial";
}

function changePauseables(state) {
    const animations = document.querySelectorAll('[data-pauseable');
    animations.forEach(animation => {
        animation.style.animationPlayState = state;
    });
}

function removeAllEntities() {
    var elementsToRemove = document.querySelectorAll('.skull, .horse, .claw');
    elementsToRemove.forEach(e => e.remove());
    enemies = [];
    claws = [];
}
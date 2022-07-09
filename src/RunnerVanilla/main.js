let livesHtml = document.getElementById("lives");
let clawsHtml = document.getElementById("claws");
let startButton = document.getElementById("start");
let character = document.getElementById("character");
let jumping;
let gameOver;
let lives;
let takingDamage;
let canJump;
let entities;
let clawsCollected;
let clawsToWin;
let intervalId;
let takingClaw;
let timeoutId;

startButton.addEventListener("click", () => {
    lives = 3;
    clawsToWin = 3;
    clawsCollected = 0;
    canJump = true;
    gameOver = false;
    jumping = false;
    takingDamage = false;
    takingClaw = false;
    removeAllEntities();
    livesHtml.innerHTML = lives;
    clawsHtml.innerHTML = clawsCollected;
    createEntity();
    intervalId = setInterval(gameLoop, 50);
    changePauseables("running");
    character.className = "running";
    startButton.style.display = "none";
});

window.addEventListener("keydown", (event) => {
    if (gameOver) return;
    if (event.key == "ArrowUp" && !jumping && canJump) {
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
    entities.forEach(entity => {
        var distance = character.offsetLeft - entity.getElement().offsetLeft;
        if (entity.isTouching(distance, jumping))
            entityTouchingPlayer(entity);
        else if (entity.offsetLeft < -200)
            entities.pop(entity);
    });
}

function createEntity() {
    if (gameOver) return;
    window.clearTimeout(timeoutId);
    var randomTime = Math.floor(Math.random() * 3000) + 1000;
    var randomEntity = Math.floor(Math.random() * 3);
    var randomPosition = Math.floor(Math.random() * 2);
    var entity;
    if (randomEntity == 1)
        entity = new Entity("skull");
    else if (randomEntity == 2)
        entity = new Entity("horse");
    else if (randomPosition == 1)
        entity = new Entity("claw", "100px");
    else
        entity = new Entity("claw", "225px");
    entities.push(entity);
    timeoutId = setTimeout(() => { createEntity() }, randomTime);
}

function entityTouchingPlayer(entity) {
    if (entity.getType() == "claw"){
        if (takingClaw) return;
        takingClaw = true;
        clawsCollected++;
        clawsHtml.innerHTML = clawsCollected;
        entity.getElement().className = "claw taking";
        entities.pop(entity);
        if (clawsCollected >= clawsToWin){
            finishGame("attacking");
        }
        setTimeout(() => {
            takingClaw = false;
        }, 800);
    } else {
        if (takingDamage) return;
        lives--;
        livesHtml.innerHTML = lives;
        if (lives <= 0){
            finishGame("dying");
        } else {
            takingDamage = true;
            canJump = false;
            character.className = "taking-damage";
            jumping = false;
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
    entities = [];
}
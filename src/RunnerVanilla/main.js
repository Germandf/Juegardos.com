let scene = new Scene();
let character = document.getElementById("character");
let jumping;
let gameOver;
let lives;
let canJump;
let entities;
let clawsCollected;
let clawsToWin;
let intervalId;
let timeoutId;

scene.getPlayButton().addEventListener("click", () => {
    lives = 3;
    clawsToWin = 6;
    clawsCollected = 0;
    canJump = true;
    gameOver = false;
    jumping = false;
    entities = [];
    scene.removeAllEntities();
    scene.updateLives(lives);
    scene.updateClawsCollected(clawsCollected);
    scene.changePauseables("running");
    scene.showButtons(false);
    createEntity();
    intervalId = setInterval(gameLoop, 50);
    character.className = "running";
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
        else if (entity.getElement().offsetLeft < -200)
            removeEntityFromArray(entity);
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
        entity = new Entity("skull", true);
    else if (randomEntity == 2)
        entity = new Entity("horse", false);
    else if (randomPosition == 1)
        entity = new Entity("claw", false);
    else
        entity = new Entity("claw", true);
    entities.push(entity);
    timeoutId = setTimeout(() => { createEntity() }, randomTime);
}

function entityTouchingPlayer(entity) {
    removeEntityFromArray(entity);
    if (entity.getType() == "claw"){
        clawsCollected++;
        scene.updateClawsCollected(clawsCollected);
        entity.getElement().className = "claw taking";
        if (clawsCollected >= clawsToWin){
            finishGame("attacking");
        }
    } else {
        lives--;
        scene.updateLives(lives);
        if (lives <= 0){
            finishGame("dying");
        } else {
            canJump = false;
            character.className = "taking-damage";
            jumping = false;
            setTimeout(() => {
                if (gameOver) return;
                character.className = "running";
                canJump = true;
            }, 250);
        }
    }
}

function finishGame(characterAnimation) {
    gameOver = true;
    clearInterval(intervalId);
    scene.changePauseables("paused");
    scene.removeAllEntities();
    scene.showButtons(true);
    character.className = characterAnimation;
    character.style.animationPlayState = 'running';
}

function removeEntityFromArray(entity) {
    const index = entities.indexOf(entity);
    if (index > -1)
        entities.splice(index, 1);
}
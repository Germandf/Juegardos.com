let livesHtml = document.getElementById("lives");
let clawsHtml = document.getElementById("claws");
let character = document.getElementById("character");
let jumping = false;
let dead = false;
let lives = 3;
let takingDamage = false;
let canJump = true;
let enemies = [];
let claws = [];
let clawsCollected = 0;

livesHtml.innerHTML = lives;
clawsHtml.innerHTML = clawsCollected;
createEnemy();
createClaw();
let intervalId = setInterval(gameLoop, 50);

window.addEventListener("keydown", (event) => {
    if (dead) return;
    if (event.key === "ArrowUp" && !jumping && canJump) {
        character.className = "jumping";
        jumping = true;
        setTimeout(() => {
            if (!dead){
                character.className = "running";
                jumping = false;
            }
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
    if (!dead) {
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
}

function createClaw() {
    if (!dead) {
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
}

function enemyTouchingPlayer() {
    if (!takingDamage){
        lives--;
        livesHtml.innerHTML = lives;
        if (lives <= 0){
            clearInterval(intervalId);
            const animations = document.querySelectorAll('[data-pauseable');
            animations.forEach(animation => {
                animation.style.animationPlayState = 'paused';
            });
            dead = true;
            character.className = "dying";
            character.style.animationPlayState = 'running';
        } else {
            takingDamage = true;
            canJump = false;
            character.className = "taking-damage";
            setTimeout(() => {
                character.className = "running";
                canJump = true;
            }, 250);
            setTimeout(() => {
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
}
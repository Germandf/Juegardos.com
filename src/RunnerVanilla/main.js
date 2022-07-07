let character = document.getElementById("character");
let skull = document.getElementById("skull");
let horse = document.getElementById("horse");
let claw = document.getElementById("claw");
let jumping = false;
let dead = false;
let lives = 3;
let takingDamage = false;
let canJump = true;

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
    } else if (event.key === "ArrowLeft") {
        character.className = "taking-damage";
    } else if (event.key === "ArrowRight") {
        character.className = "dying";
    }
});

let intervalId = setInterval(function() 
{
    var disBtwCharAndSkull = character.offsetLeft - skull.offsetLeft;
    var disBtwCharAndHorse = character.offsetLeft - horse.offsetLeft;
    if (((disBtwCharAndSkull > -150 && disBtwCharAndSkull < 20) && jumping) ||
        ((disBtwCharAndHorse > -180 && disBtwCharAndHorse < 70) && !jumping)){
        if (!takingDamage){
            lives--;
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
                }, 1000);
            }
        }
    }
}, 50);
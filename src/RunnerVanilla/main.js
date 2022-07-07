let character = document.getElementById("character");
let skull = document.getElementById("skull");
let horse = document.getElementById("horse");
let claw = document.getElementById("claw");
let jumping = false;
let dead = false;

window.addEventListener("keydown", (event) => {
    if (dead) return;
    if (event.key === "ArrowUp" && !jumping) {
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
        clearInterval(intervalId);
        const animations = document.querySelectorAll('[data-pauseable');
        animations.forEach(animation => {
            animation.style.animationPlayState = 'paused';
        });
        dead = true;
        character.className = "dying";
        character.style.animationPlayState = 'running';
    }
}, 50);
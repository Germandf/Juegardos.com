let character = document.getElementById("character");
let skull = document.getElementById("skull");
let horse = document.getElementById("horse");
let claw = document.getElementById("claw");
let jumping = false;

character.style.bottom = "0px";
character.style.right = "700px";
skull.style.right = "496px";
horse.style.right = "96px";

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && !jumping) {
        character.className = "jumping";
        jumping = true;
        setTimeout(() => {
            character.className = "running";
            jumping = false;
        }, 1125)
    } else if (event.key === "ArrowLeft") {
        character.className = "taking-damage";
    } else if (event.key === "ArrowRight") {
        character.className = "dying";
    }
});

let intervalId = setInterval(function() 
{
    var skullRight = parseInt(skull.style.right);
    var horseRight = parseInt(horse.style.right);
    skull.style.right = (skullRight + 15) + "px";
    horse.style.right = (horseRight + 15) + "px";
    var disBtwCharAndSkull = parseInt(character.style.right) - parseInt(skull.style.right);
    var disBtwCharAndHorse = parseInt(character.style.right) - parseInt(horse.style.right);
    if (((disBtwCharAndSkull > -50 && disBtwCharAndSkull < 20) && jumping) ||
        ((disBtwCharAndHorse > -80 && disBtwCharAndHorse < 70) && !jumping)){
        clearInterval(intervalId);
    }
}, 50);
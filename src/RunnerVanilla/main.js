let character = document.getElementById("character");
let skull = document.getElementById("skull");
let horse = document.getElementById("horse");
let claw = document.getElementById("claw");
let jumping = false;

character.style.bottom = "0px";
skull.style.right = "96px";
horse.style.right = "96px";

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && !jumping) {
        character.className = "jumping";
        jumping = true;
        setTimeout(() => {
            character.className = "running";
            jumping = false;
        }, 1000)
    } else if (event.key === "ArrowLeft") {
        character.className = "taking-damage";
    } else if (event.key === "ArrowRight") {
        character.className = "dying";
    }
});

let intervalId = setInterval(function() 
{
    var right = parseInt(skull.style.right);
    skull.style.right = (right + 10) + "px";
    horse.style.right = (right + 10) + "px";
    /*
    if (character.offsetLeft == skull.offsetLeft - character.clientWidth + skull.clientWidth){
        clearInterval(intervalId);
    }
    */
    if (character.offsetLeft == horse.offsetLeft - character.clientWidth + horse.clientWidth){
        clearInterval(intervalId);
    }
}, 50);
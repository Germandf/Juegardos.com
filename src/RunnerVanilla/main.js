let character = document.getElementById("character");

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        character.className = "jumping";
    } else if (event.key === "ArrowLeft") {
        character.className = "taking-damage";
    } else if (event.key === "ArrowRight") {
        character.className = "dying";
    } else if (event.key === "ArrowDown") {
        character.className = "running";
    }
}); 

let intervalId = setInterval(function() 
{
    console.log("gameloop");
}, 50);
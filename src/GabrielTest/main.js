let board = document.getElementById("board");
let inputX = document.getElementById("mouse_x");
let inputY = document.getElementById("mouse_y");
// let chips = document.getElementById("chips");
/** @type {CanvasRenderingContext2D} */
let ctx = board.getContext("2d");

let width = board.width;
let height = board.height;

let w = h = 30;
let cantChips = 10;

function draw() {
    ctx.fillStyle = 'red';
    for (let i = 0; i < cantChips; i++) {
        ctx.beginPath();
        ctx.fillRect(Math.random() * width, Math.random() * height, h, w);
    }
}

function getMousePos(board, evt) {
    let ClientRect = board.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    }
}

board.addEventListener("mousemove", (e) => {
    inputX.value = e.clientX;
    inputY.value = e.clientY;
})

board.addEventListener("click", function(e) {    
    let mousePos = getMousePos(this, e);
    ctx.beginPath();
    // ctx.lineWidth = 4;
    // ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'yellow';
    ctx.fillRect(mousePos.x-w/2,mousePos.y-h/2,h,w);
});

draw();
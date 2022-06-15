var boardCanvas = document.getElementById("board");
/** @type {boardCanvasRenderingContext2D} */
var boardCtx = boardCanvas.getContext("2d");

let board = new Board(boardCanvas, boardCtx, 7, 6);
board.drawBoard();

let lastClickedChip = null;
let isMouseDown = false;
let chips = [];
var testCanvas = document.getElementById("test");
/** @type {boardCanvasRenderingContext2D} */
var testCtx = testCanvas.getContext("2d");
for (let i = 0; i < 20; i++){
    addChip();
}
drawChips();
testCanvas.addEventListener('mousedown', onMouseDown, false);
testCanvas.addEventListener('mouseup', onMouseUp, false);
testCanvas.addEventListener('mousemove', onMouseMove, false);

function drawChips() {
    testCtx.fillStyle = "gray";
    testCtx.fillRect(0, 0, testCanvas.width, testCanvas.height);
    for (let i = 0; i < chips.length; i++) {
        chips[i].draw();
    }
}

function addChip() {
    let x = Math.round(Math.random() * testCanvas.width);
    let y = Math.round(Math.random() * testCanvas.height);
    let chip = new Chip(x, y, 30, "yellow", testCtx);
    chips.push(chip);
}

function onMouseDown(e) {
    isMouseDown = true;
    if (lastClickedChip != null) {
        lastClickedChip.setHighlighted(false);
        lastClickedChip = null;
    }
    let clickedChip = findClickedChip(e.offsetX, e.offsetY);
    if (clickedChip != null) {
        clickedChip.setHighlighted(true);
        lastClickedChip = clickedChip;
    }
    drawChips();
}

function onMouseUp(e) {
    isMouseDown = false;
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedChip != null) {
        lastClickedChip.setPosition(e.offsetX, e.offsetY);
        drawChips();
    }
}

function findClickedChip(x, y) {
    for (let i = 0; i < chips.length; i++) {
        const element = chips[i];
        if (element.isMouseOn(x, y)) {
            return element;
        }
    }
}


const boardCanvas = document.getElementById("board");
/** @type {boardCanvasRenderingContext2D} */
const boardCtx = boardCanvas.getContext("2d");
const mode = document.getElementById("mode");
const resetBtn = document.getElementById("reset");
const playerTurnElement = document.getElementById("playerTurn");
const timerElement  = document.getElementById("timer");
const board = new Board(boardCanvas, boardCtx, playerTurnElement, timerElement);

board.setUpBoard(7, 6, 5 * 60);

resetBtn.addEventListener('click', function () {
    modeSelected = mode.value;
    switch (modeSelected) {
        case "5":
            board.setUpBoard(8, 7, 5 * 60);
        break;
        case "6":
            board.setUpBoard(9, 8, 5 * 60);
        break;
        default:
            board.setUpBoard(7, 6, 5 * 60);
        break;
    }
});
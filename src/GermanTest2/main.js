const boardCanvas = document.getElementById("board");
/** @type {boardCanvasRenderingContext2D} */
const boardCtx = boardCanvas.getContext("2d");
const mode = document.getElementById("mode");
const resetBtn = document.getElementById("reset");
const playerTurnElement = document.getElementById("playerTurn");
const board = new Board(boardCanvas, boardCtx, playerTurnElement);

board.setUpBoard(7, 6);

resetBtn.addEventListener('click', function () {
    modeSelected = mode.value;
    switch (modeSelected) {
        case "5":
            board.setUpBoard(8, 7);
        break;
        case "6":
            board.setUpBoard(9, 8);
        break;
        default:
            board.setUpBoard(7, 6);
        break;
    }
});
var boardCanvas = document.getElementById("board");
/** @type {boardCanvasRenderingContext2D} */
var boardCtx = boardCanvas.getContext("2d");

let board = new Board(boardCanvas, boardCtx, 7, 6);
board.setUpBoard();
board.drawBoard();

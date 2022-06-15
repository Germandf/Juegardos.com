const chipsContainerWidth = 300;

class Board {
    constructor(boardCanvas, boardCtx, horizontalChips, verticalChips) {
        this.boardCanvas = boardCanvas;
        /** @type {CanvasRenderingContext2D} */
        this.boardCtx = boardCtx;
        this.horizontalChips = horizontalChips;
        this.verticalChips = verticalChips;
        this.celda = boardCanvas.width / ((this.horizontalChips + this.verticalChips) / 2);
    }

    drawBoard() {
        // draw board background
        this.boardCanvas.height = this.celda * this.verticalChips;
        this.boardCanvas.width = this.celda * this.horizontalChips + chipsContainerWidth * 2;
        this.boardCtx.fillStyle = "#3867d6";
        this.boardCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
        this.boardCtx.stroke();
        // draw board holes
        this.boardCtx.fillStyle = "white";
        for (var y = 0; y < this.verticalChips * this.celda; y += this.celda) {
          for (var x = chipsContainerWidth; x < this.horizontalChips * this.celda + chipsContainerWidth; x += this.celda) {
            this.boardCtx.arc(x + this.celda / 2, y + this.celda / 2, this.celda * 0.35, 0, Math.PI * 2, true);
            this.boardCtx.fill();
            this.boardCtx.closePath();
          }
        }
    }
}
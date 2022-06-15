class Board {
    constructor(boardCanvas, boardCtx) {
        this.boardCanvas = boardCanvas;
        /** @type {CanvasRenderingContext2D} */
        this.boardCtx = boardCtx;
        this.cantCeldasHorizontal = 7;
        this.cantCeldasVertical = 6;
        this.celda = boardCanvas.width / ((this.cantCeldasHorizontal + this.cantCeldasVertical) / 2);
        this.mitadCelda = this.celda / 2;
    }

    drawBoard() {
        this.boardCanvas.height = this.celda * this.cantCeldasVertical;
        this.boardCanvas.width = this.celda * this.cantCeldasHorizontal;
        this.boardCtx.fillStyle = "#3867d6";
        this.boardCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
        this.boardCtx.stroke();
        this.boardCtx.fillStyle = "white";
        for (var y = 0; y < this.cantCeldasVertical * this.celda; y += this.celda) {
          for (var x = 0; x < this.cantCeldasHorizontal * this.celda; x += this.celda) {
            this.boardCtx.arc(x + this.mitadCelda, y + this.mitadCelda, this.celda * 0.35, 0, Math.PI * 2, true);
            this.boardCtx.fill();
            this.boardCtx.closePath();
          }
        }
    }
}
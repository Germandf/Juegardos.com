const chipsContainerWidth = 300;

class Board {
    constructor(boardCanvas, boardCtx, horizontalChips, verticalChips) {
        this.boardCanvas = boardCanvas;
        /** @type {CanvasRenderingContext2D} */
        this.boardCtx = boardCtx;
        this.horizontalChips = horizontalChips;
        this.verticalChips = verticalChips;
        this.celda = boardCanvas.width / ((this.horizontalChips + this.verticalChips) / 2);
        this.lastClickedChip = null;
        this.isMouseDown = false;
        this.chips = [];
    }

    setUpBoard() {
        // set sizes
        this.boardCanvas.height = this.celda * this.verticalChips;
        this.boardCanvas.width = this.celda * this.horizontalChips + chipsContainerWidth * 2;

        // add chips player 1
        for (let i = 0; i < 20; i++){
            var randomX = Math.round(Math.random() * (chipsContainerWidth - this.celda * 0.35 * 2) + this.celda * 0.35);
            let randomY = Math.round(Math.random() * (boardCanvas.height - this.celda * 0.35 * 2) + this.celda * 0.35);
            let chip = new Chip(randomX, randomY, this.celda * 0.35, "yellow", boardCtx);
            this.chips.push(chip);
        }

        // add chips player 2
        for (let i = 0; i < 20; i++){
            
        }

        boardCanvas.addEventListener('mousedown', this.onMouseDown, false);
        boardCanvas.addEventListener('mouseup', this.onMouseUp, false);
        boardCanvas.addEventListener('mousemove', this.onMouseMove, false);
    }

    drawBoard() {
        // draw board background
        this.boardCtx.fillStyle = "#3867d6";
        this.boardCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
        this.boardCtx.stroke();

        // draw chips containers
        this.boardCtx.fillStyle = "gray";
        this.boardCtx.fillRect(0, 0, chipsContainerWidth, boardCanvas.height);
        this.boardCtx.fillRect(boardCanvas.width - chipsContainerWidth, 0, boardCanvas.width, boardCanvas.height);
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

        // drawChips
        for (let i = 0; i < this.chips.length; i++) {
            this.chips[i].draw();
        }
    }

    findClickedChip(x, y) {
        for (let i = 0; i < this.chips.length; i++) {
            const element = this.chips[i];
            if (element.isMouseOn(x, y)) {
                return element;
            }
        }
    }
    
    onMouseDown(e) {
        this.isMouseDown = true;
        if (this.lastClickedChip != null) {
            this.lastClickedChip.setHighlighted(false);
            this.lastClickedChip = null;
        }
        let clickedChip = this.findClickedChip(e.offsetX, e.offsetY);
        if (clickedChip != null) {
            clickedChip.setHighlighted(true);
            this.lastClickedChip = clickedChip;
        }
        this.drawBoard();
    }
    
    onMouseUp(e) {
        this.isMouseDown = false;
    }
    
    onMouseMove(e) {
        if (this.isMouseDown && this.lastClickedChip != null) {
            this.lastClickedChip.setPosition(e.offsetX, e.offsetY);
            this.drawBoard();
        }
    }
    
    
}
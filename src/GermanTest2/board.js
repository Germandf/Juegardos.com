const chipsContainerWidth = 300;

class Board {
    constructor(boardCanvas, boardCtx) {
        this.boardCanvas = boardCanvas;
        /** @type {CanvasRenderingContext2D} */
        this.boardCtx = boardCtx;
        this.horizontalChips = 7;
        this.verticalChips = 6;
        this.celda = this.boardCanvas.width / ((this.horizontalChips + this.verticalChips) / 2);
        this.lastClickedChip = null;
        this.isMouseDown = false;
        this.chips = [];
        this.eventListenersAdded = false;
        this.matrix = [];
    }

    setUpBoard(horizontalChips, verticalChips) {
        // set sizes
        this.horizontalChips = horizontalChips;
        this.verticalChips = verticalChips;
        this.boardCanvas.height = this.celda * this.verticalChips;
        this.boardCanvas.width = this.celda * this.horizontalChips + chipsContainerWidth * 2;

        //reset chips
        this.chips = [];

        // reset matrix
        this.initializeMatrix();

        // add chips player 1
        for (let i = 0; i < this.horizontalChips * this.verticalChips / 2; i++){
            var randomX = Math.round(Math.random() * (chipsContainerWidth - this.celda * 0.35 * 2) + this.celda * 0.35);
            let randomY = Math.round(Math.random() * (this.boardCanvas.height - this.celda * 0.35 * 2) + this.celda * 0.35);
            let chip = new Chip(randomX, randomY, this.celda * 0.35, 1, boardCtx);
            this.chips.push(chip);
        }

        // add chips player 2
        for (let i = 0; i < this.horizontalChips * this.verticalChips / 2; i++){
            var randomX = Math.round(Math.random() * (chipsContainerWidth - this.celda * 0.35 * 2) + this.celda * 0.35 + this.boardCanvas.width - chipsContainerWidth);
            let randomY = Math.round(Math.random() * (this.boardCanvas.height - this.celda * 0.35 * 2) + this.celda * 0.35);
            let chip = new Chip(randomX, randomY, this.celda * 0.35, 2, boardCtx);
            this.chips.push(chip);
        }

        // add event listeners
        if (!this.eventListenersAdded) {
            this.boardCanvas.addEventListener('mousedown', (e) => this.onMouseDown(this, e), false);
            this.boardCanvas.addEventListener('mouseup', (e) => this.onMouseUp(this, e), false);
            this.boardCanvas.addEventListener('mousemove', (e) => this.onMouseMove(this, e), false);
            this.eventListenersAdded = true;
        }
        
        this.drawBoard();
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
    
    onMouseDown(board, e) {
        board.isMouseDown = true;
        if (board.lastClickedChip != null) {
            board.lastClickedChip.setHighlighted(false);
            board.lastClickedChip = null;
        }
        let clickedChip = board.findClickedChip(e.offsetX, e.offsetY);
        if (clickedChip != null) {
            clickedChip.setHighlighted(true);
            board.lastClickedChip = clickedChip;
        }
        board.drawBoard();
    }
    
    onMouseUp(board, e) {
        board.isMouseDown = false;
        board.addChip(e, this.lastClickedChip);
        this.drawBoard();
    }
    
    onMouseMove(board, e) {
        if (board.isMouseDown && board.lastClickedChip != null) {
            board.lastClickedChip.setPosition(e.offsetX, e.offsetY);
            board.drawBoard();
        }
    }

    initializeMatrix() {
        for (let x = 0; x < this.horizontalChips; x++) {
            this.matrix[x] = [];
            for (let y = 0; y < this.verticalChips; y++) {
                this.matrix[x][y] = null;
            }
        }
    }

    getColumnSelected(x, y) {
        if (y > this.celda)
            return null;
        for (let column = 0; column < this.horizontalChips; column++) {
            if (x >= column * this.celda & x < column * this.celda + this.celda + chipsContainerWidth) {
                return column;
            }
        }
        return null;
    }

    addChip(e, lastClickedChip) {
        if (lastClickedChip != null) {
            let column = this.getColumnSelected(e.layerX, e.layerY);
            if (column != null) {
                for (let row = 0; row < this.verticalChips; row++) {
                    if (this.matrix[column][row] === null) {
                        let index = this.chips.indexOf(lastClickedChip);
                        if (index > -1) {
                            this.chips.splice(index, 1);
                        }
                        this.matrix[column][row] = lastClickedChip;
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
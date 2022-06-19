const chipsContainerWidth = 300;

class Board {
    constructor(boardCanvas, boardCtx, playerTurnElement, timerElement) {
        this.boardCanvas = boardCanvas;
        /** @type {CanvasRenderingContext2D} */
        this.boardCtx = boardCtx;
        this.playerTurnElement = playerTurnElement;
        this.horizontalChips = 7;
        this.verticalChips = 6;
        this.chipsToWin = 4;
        this.cell = this.boardCanvas.width / ((this.horizontalChips + this.verticalChips) / 2);
        this.lastClickedChip = null;
        this.isMouseDown = false;
        this.chips = [];
        this.eventListenersAdded = false;
        this.matrix = [];
        this.playerTurn = 1;
        this.timer = new Timer(timerElement);
    }

    setUpBoard(horizontalChips, verticalChips, chipsToWin, seconds) {
        // set sizes, reset properties
        this.horizontalChips = horizontalChips;
        this.verticalChips = verticalChips;
        this.chipsToWin = chipsToWin;
        this.boardCanvas.height = this.cell * this.verticalChips;
        this.boardCanvas.width = this.cell * this.horizontalChips + chipsContainerWidth * 2;
        this.chips = [];
        this.initializeMatrix();
        this.playerTurn = 1;
               
        // add players' chips
        for (let i = 0; i < this.horizontalChips * this.verticalChips / 2; i++){
            var randomX = Math.round(Math.random() * (chipsContainerWidth - this.cell * 0.35 * 2) + this.cell * 0.35);
            let randomY = Math.round(Math.random() * (this.boardCanvas.height - this.cell * 0.35 * 2) + this.cell * 0.35);
            let chip = new Chip(randomX, randomY, this.cell * 0.35, 1, boardCtx);
            this.chips.push(chip);
        }
        for (let i = 0; i < this.horizontalChips * this.verticalChips / 2; i++){
            var randomX = Math.round(Math.random() * (chipsContainerWidth - this.cell * 0.35 * 2) + this.cell * 0.35 + this.boardCanvas.width - chipsContainerWidth);
            let randomY = Math.round(Math.random() * (this.boardCanvas.height - this.cell * 0.35 * 2) + this.cell * 0.35);
            let chip = new Chip(randomX, randomY, this.cell * 0.35, 2, boardCtx);
            this.chips.push(chip);
        }
        // add event listeners
        if (!this.eventListenersAdded) {
            this.boardCanvas.addEventListener('mousedown', (e) => this.onMouseDown(this, e), false);
            this.boardCanvas.addEventListener('mouseup', (e) => this.onMouseUp(this, e), false);
            this.boardCanvas.addEventListener('mousemove', (e) => this.onMouseMove(this, e), false);
            this.eventListenersAdded = true;
        }
        // redraw
        this.drawBoard();
        this.renderPlayerTurn();
        this.timer.setUpTimer(seconds, () => this.endGame(0));
        
    }

    drawBoard() {
        // draw board background
        this.boardCtx.fillStyle = "#3867d6";
        this.boardCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
        // draw chips containers
        this.boardCtx.fillStyle = "gray";
        this.boardCtx.fillRect(0, 0, chipsContainerWidth, boardCanvas.height);
        this.boardCtx.fillRect(boardCanvas.width - chipsContainerWidth, 0, boardCanvas.width, boardCanvas.height);
        // draw board holes
        for (let column = 0; column < this.matrix.length; column++) {
            for (let row = 0; row < this.matrix[column].length; row++) {
                if (this.matrix[column][row] === null){
                    this.boardCtx.beginPath();
                    this.boardCtx.fillStyle = "white";
                    this.boardCtx.arc(chipsContainerWidth + column * this.cell + this.cell / 2, row * this.cell + this.cell / 2, this.cell * 0.35, 0, Math.PI * 2, true);
                    this.boardCtx.fill();
                    this.boardCtx.closePath();
                } else {
                    this.matrix[column][row].setPosition(chipsContainerWidth + column * this.cell + this.cell / 2, row * this.cell + this.cell / 2);
                    this.matrix[column][row].draw();
                }
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
        if (board.lastClickedChip != null)
            board.lastClickedChip = null;
        let clickedChip = board.findClickedChip(e.offsetX, e.offsetY);
        if (clickedChip != null && clickedChip.getPlayer() === this.playerTurn)
            board.lastClickedChip = clickedChip;
    }

    onMouseMove(board, e) {
        if (board.isMouseDown && board.lastClickedChip != null) {
            board.lastClickedChip.setPosition(e.offsetX, e.offsetY);
            board.drawBoard();
        }
    }
    
    onMouseUp(board, e) {
        board.isMouseDown = false;
        if (board.addChip(e, this.lastClickedChip)){
            // TODO check winner
            // search winner horizontal            
            for (let row = this.verticalChips - 1; row >= 0 ; row--) {
                if (this.searchHorizontal(row))
                    this.endGame(this.playerTurn);
            }
            for (let column = 0; column < this.horizontalChips; column++) {
                if (this.searchVertical(column))
                    this.endGame(this.playerTurn);
            }            
            if (this.playerTurn === 1) this.playerTurn = 2;
            else this.playerTurn = 1;
        }
        this.lastClickedChip = null;
        this.drawBoard();
        this.renderPlayerTurn();
    }

    searchHorizontal(row) {        
        let chipsInLine = 0;     
        for (let column = 0; column < this.horizontalChips; column++) {
            let actualChip = this.matrix[column][row];
            console.log(actualChip);
            if (actualChip !== null) {                
                if (actualChip.getPlayer() == this.playerTurn)
                    chipsInLine++;
                else
                    chipsInLine = 0;                
                if (chipsInLine == this.chipsToWin)
                    return true; 
            }               
        }
        return false;
    }

    searchVertical(column) {
        let chipsInLine = 0;
        for (let row = 0; row < this.verticalChips; row++) {
            let actualChip = this.matrix[column][row];
            if (actualChip !== null) {            
                if (actualChip.getPlayer() == this.playerTurn)
                    chipsInLine++;
                else
                    chipsInLine = 0;
                if (chipsInLine == this.chipsToWin)
                    return true;
            }
        }
        return false;
    }

    initializeMatrix() {
        this.matrix = [];
        for (let x = 0; x < this.horizontalChips; x++) {
            this.matrix[x] = [];
            for (let y = 0; y < this.verticalChips; y++) {
                this.matrix[x][y] = null;
            }
        }
    }

    // returns -1 if chip is outside board, null if it's inside but not on top and column's number if it's inserted correctly
    getColumnSelected(x, y) {
        if (x < chipsContainerWidth || x > this.boardCanvas.width - chipsContainerWidth)
            return -1;
        if (y > this.cell)
            return null;
        for (let column = 0; column < this.horizontalChips; column++) {
            if (x >= column * this.cell + chipsContainerWidth && x < column * this.cell + this.cell + chipsContainerWidth) {
                return column;
            }
        }
        return null;
    }

    // adds chip inside board's selected column, move chip to random position in it's chip's container if it's outside it and couldn't insert
    addChip(e, lastClickedChip) {
        if (lastClickedChip != null) {
            let column = this.getColumnSelected(e.offsetX, e.offsetY);
            if (column !== null && column !== -1) {
                for (let row = this.matrix[column].length - 1; row >= 0; row--) {
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
            if (column === null || column !== -1) {
                if (this.playerTurn === 1){
                    var randomX = Math.round(Math.random() * (chipsContainerWidth - this.cell * 0.35 * 2) + this.cell * 0.35);
                    let randomY = Math.round(Math.random() * (this.boardCanvas.height - this.cell * 0.35 * 2) + this.cell * 0.35);
                    lastClickedChip.setPosition(randomX, randomY)
                }
                else {
                    var randomX = Math.round(Math.random() * (chipsContainerWidth - this.cell * 0.35 * 2) + this.cell * 0.35 + this.boardCanvas.width - chipsContainerWidth);
                    let randomY = Math.round(Math.random() * (this.boardCanvas.height - this.cell * 0.35 * 2) + this.cell * 0.35);
                    lastClickedChip.setPosition(randomX, randomY)
                }
            }
        }
        return false;
    }

    renderPlayerTurn() {
        this.playerTurnElement.innerHTML = "Turno jugador " + this.playerTurn;
        if (this.playerTurn === 1)
            this.playerTurnElement.style.color = "yellow";
        else
            this.playerTurnElement.style.color = "red";
    }

    endGame(endCase) {
        let text = "";
        this.timer.stopTimer();
        switch (endCase) {
            case 0:
                text = "Se acabó el tiempo";
            break;
            case 1:
                text = "Ganó el jugador 1";
            break;
            case 2:
                text = "Ganó el jugador 2";
            break;
            case 3:
                text = "Empate";
            break;
            default:
                text = "Desconocido";
            break;
        }
        alert(text);
    }
}
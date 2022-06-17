class Chip {
    constructor(x, y, radius, player, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        /** @type {CanvasRenderingContext2D} */
        this.ctx = ctx;
        this.highlighted = false;
        this.highlightedStyle = "black";
        const img = new Image();
        this.loadedImg = false;
        this.player = player;
        if (this.player === 1){
            img.src = "./chip1.png";
            this.img = img;
            this.fill = "yellow";
        } else {
            img.src = "./chip2.png";
            this.img = img;
            this.fill = "red";
        }
    }

    setFill(fill) {
        this.fill = fill;
    }

    getFill() {
        return this.fill;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }

    draw() {
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        if (this.highlighted === true) {
            this.ctx.strokeStyle = this.highlightedStyle;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }
        this.ctx.closePath();
        if (this.loadedImg) {
            this.ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
        else {
            this.img.onload = () => {
                this.ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
            }
            this.loadedImg = true;
        }
    }

    getRadius() {
        return this.radius;
    }

    setHighlighted(highlighted) {
        this.highlighted = highlighted;
    }

    isMouseOn(x, y) {
        let _x = this.x - x;
        let _y = this.y - y;
        let sqrt = Math.sqrt(_x * _x + _y * _y);
        return sqrt < this.radius;
    }
}
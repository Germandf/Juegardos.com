class Chip {
    constructor(x, y, radius, player, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        /** @type {CanvasRenderingContext2D} */
        this.ctx = ctx;
        const img = new Image();
        this.loadedImg = false;
        this.player = player;
        if (this.player === 1){
            img.src = "./images/connect4/chip1.png";
            this.img = img;
            this.fill = "yellow";
        } else {
            img.src = "./images/connect4/chip2.png";
            this.img = img;
            this.fill = "red";
        }
    }

    // sets filling color
    setFill(fill) {
        this.fill = fill;
    }

    // gets filling color
    getFill() {
        return this.fill;
    }

    // sets chip's position
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    // gets chip's position
    getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }

    // redraw chip on canvas' context
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fill;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        if (this.loadedImg) {
            this.ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
        else {
            this.img.onload = () => {
                this.ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
            }
            this.loadedImg = true;
        }
        this.ctx.closePath();
    }

    // gets chip's radius
    getRadius() {
        return this.radius;
    }

    // gets if mouse is on chip's position
    isMouseOn(x, y) {
        let _x = this.x - x;
        let _y = this.y - y;
        let sqrt = Math.sqrt(_x * _x + _y * _y);
        return sqrt < this.radius;
    }

    // gets chip's owner player
    getPlayer(){
        return this.player;
    }
}
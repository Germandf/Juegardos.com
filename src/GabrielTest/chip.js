class Chip {
    constructor(color, height, width, posX, posY, id, ctx){
        this.color = color;
        this.height = height;
        this.width = width;
        this.posX = posX;
        this.posY = posY;
        this.id = id;
        this.ctx = ctx;
    }
    draw() {
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        this.ctx.fillRect(this.posX,this.posY,this.height,this.width);

    }
}
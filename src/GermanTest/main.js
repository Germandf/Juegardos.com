var tablero = document.getElementById("board");
var canvasGame = document.getElementById("chips");
var reiniciarBtn = document.getElementById("reset")
var ctx = tablero.getContext('2d');
var ctxGame = canvasGame.getContext('2d');
var dx=[ 1,-1, 0, 0, 1,-1, 1,-1];
var dy=[ 0, 0, 1,-1,-1, 1, 1,-1];
var celda = 100;
var mitadCelda = celda / 2;
tablero.height = celda * 7;
tablero.width = celda * 7;
canvasGame.height = celda * 7;
canvasGame.width = celda * 7;
var turno = 2;
var color;
var matriz = [];
for(var i = 0; i < 7; i++){
  matriz[i] = new Array(6);
}

// Dibujar tablero
ctx.fillStyle = "#3867d6";
ctx.fillRect(0, celda, tablero.width, tablero.height);
ctx.stroke();

// Poner agujeros en el tablero
function clearCircle(x, y, radius) {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();
}
for (var y = 100; y < 700; y += celda) {
  for (var x = 0; x < 700; x += celda) {
    clearCircle(x + mitadCelda, y + mitadCelda, 35);
  }
}

ctx.globalCompositeOperation = 'source-over';

// Identificar columna clickeada
function getMousePos(evt) {
  var mouseX = evt.offsetX * tablero.width / tablero.clientWidth;
  var mouseY = evt.offsetY * tablero.height / tablero.clientHeight;
  return {
    x: mouseX,
    y: mouseY
  };
}

tablero.addEventListener('click', function (evt) {
  //Poner un rectangulo blanco hasta arriba
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,celda*7, celda);
  ctx.stroke();
  var mousePos = getMousePos(evt);
  for (var i = 0; i < tablero.width; i += celda) {
    if (mousePos.x > i && mousePos.x < i + celda) {
      if(matriz[i/100][0] !== undefined) break;
      var topeY = llenarColumna(i/100) + 1;
      cambiarTurno();
      dejarFichaCaer(i + mitadCelda, mitadCelda, topeY * celda + mitadCelda);
      tablero.style.pointerEvents = 'none';
      if(!yaGanoAlguien(i/100, topeY-1)){
        setTimeout(function(){ 
          tablero.style.pointerEvents = 'auto';
        }, 500);
      } else{
        colorearfichasGandoras();
      }
    }
  }
});

function llenarColumna(numCol){
  var numFila = 5;
  while(numFila >= 0 && matriz[numCol][numFila] != undefined){
    numFila--;
  }
  if(numFila < 0) return;
  matriz[numCol][numFila] = turno;
  return numFila;
}
var posWinners=[[0,0],[0,0],[0,0],[0,0]];
function fCount(mx,my,columna,fila,valorFicha){
  if(fila<0 || fila>5 || columna<0 || columna>6)
    return 0;
  if(matriz[columna][fila]!=valorFicha)
    return 0;
  return 1 + fCount(mx,my,columna+my,fila+mx,valorFicha);
}
var posi=0;
function fCount2(mx,my,columna,fila,valorFicha)
{
  if(fila<0 || fila>5 || columna<0 || columna>6)
    return;
  if(matriz[columna][fila]!=valorFicha)
    return;
  posWinners[posi] = [columna, fila];
  posi++;
  fCount2(mx,my,columna+my,fila+mx,valorFicha);
}

function yaGanoAlguien(xFicha, yFicha){
  var valorFicha = matriz[xFicha][yFicha];
  for(var i=0;i<8;i+=2){
    var lado1=fCount(dx[i],dy[i],xFicha+dy[i],yFicha+dx[i],valorFicha);
    var lado2=fCount(dx[i+1],dy[i+1],xFicha+dy[i+1],yFicha+dx[i+1],valorFicha);
    if(lado1+lado2+1>=4){
      posi=0;
      fCount2(dx[i],dy[i],xFicha+dy[i],yFicha+dx[i],valorFicha,posi);
      fCount2(dx[i+1],dy[i+1],xFicha+dy[i+1],yFicha+dx[i+1],valorFicha,posi);
      posWinners[posi]=[xFicha,yFicha];
      return true; 
    }
  }  
  return false;
}

function colorearfichasGandoras(){
  for(var i = 0; i<=3; i++){
    var x=posWinners[i][0];
    var y=posWinners[i][1];
    console.log(x + " " + y);
    ctx.beginPath();
    ctx.arc(x*celda+mitadCelda, y*celda+celda+mitadCelda, 35, 0, Math.PI * 2, true);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#66FF33";
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

// Animar ficha cayendo
function dejarFichaCaer(x, y, yMax) {
  ctxGame.clearRect(x - mitadCelda, 0, celda, yMax);
  ctxGame.beginPath();
  ctxGame.arc(x, y, 35, 0, Math.PI * 2);
  ctxGame.strokeStyle = "white";
  ctxGame.fillStyle = color;
  ctxGame.fill();
  ctxGame.stroke();
  if (y !== yMax) {
    y += 10;
    setTimeout('dejarFichaCaer(' + x + ',' + y + ', ' + yMax + ')', 1);
  }
  return;
}

function cambiarTurno(){
  turno = (turno == 1 ? 2 : 1);
  color = (turno == 1 ? '#f7b731': '#eb3b5a');
}

// Reiniciar juego
reiniciarBtn.addEventListener('click', function () {
  location.reload();
});

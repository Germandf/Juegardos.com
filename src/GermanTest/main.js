const tablero = document.getElementById("board");
const canvasGame = document.getElementById("chips");
const reiniciarBtn = document.getElementById("reset")
const ctx = tablero.getContext('2d');
const ctxGame = canvasGame.getContext('2d');
const dx=[ 1,-1, 0, 0, 1,-1, 1,-1];
const dy=[ 0, 0, 1,-1,-1, 1, 1,-1];
const celda = 100;
const mitadCelda = celda / 2;

var cantCeldasHorizontal = 7;
var cantCeldasVertical = 6;
var cantEnLinea = 4;

tablero.height = celda * (cantCeldasVertical + 1);
tablero.width = celda * cantCeldasHorizontal;
canvasGame.height = celda * (cantCeldasVertical + 1);
canvasGame.width = celda * cantCeldasHorizontal;
var jugador = 1;
var color;
var matriz = [];
for(var i = 0; i < cantCeldasHorizontal; i++){
  matriz[i] = new Array(cantCeldasVertical);
}
var posWinners=[[0,0],[0,0],[0,0],[0,0]];
var posi=0;

// Dibujar tablero
ctx.fillStyle = "#3867d6";
ctx.fillRect(0, celda, tablero.width, tablero.height);
ctx.stroke();
for (var y = 100; y < (cantCeldasVertical + 1) * 100; y += celda) {
  for (var x = 0; x < cantCeldasHorizontal * 100; x += celda) {
    clearCircle(x + mitadCelda, y + mitadCelda, 35);
  }
}

tablero.addEventListener('click', function (evt) {
  // Poner un rectangulo blanco hasta arriba
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,celda * cantCeldasHorizontal, celda);
  ctx.stroke();
  var mousePos = getMousePos(evt);
  for (var i = 0; i < tablero.width; i += celda) {
    if (mousePos.x > i && mousePos.x < i + celda) {
      if(matriz[i/100][0] !== undefined) break;
      var topeY = llenarColumna(i/100) + 1;
      cambiarTurnoJugador();
      dejarFichaCaer(i + mitadCelda, mitadCelda, topeY * celda + mitadCelda);
      tablero.style.pointerEvents = 'none';
      if(!hayGanador(i/100, topeY-1)){
        setTimeout(function(){ 
          tablero.style.pointerEvents = 'auto';
        }, 500);
      } else{
        colorearfichasGandoras();
      }
    }
  }
});

// Reiniciar juego
reiniciarBtn.addEventListener('click', function () {
  location.reload();
});

// Poner agujeros en el tablero
function clearCircle(x, y, radius) {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();
}

// Identificar columna clickeada
function getMousePos(evt) {
  var mouseX = evt.offsetX * tablero.width / tablero.clientWidth;
  var mouseY = evt.offsetY * tablero.height / tablero.clientHeight;
  return {
    x: mouseX,
    y: mouseY
  };
}

function llenarColumna(numCol){
  var numFila = cantCeldasVertical-1;
  while(numFila >= 0 && matriz[numCol][numFila] != undefined){
    numFila--;
  }
  if(numFila < 0) return;
  matriz[numCol][numFila] = jugador;
  return numFila;
}

function fCount(mx,my,columna,fila,valorFicha){
  if(fila<0 || fila>cantCeldasVertical-1 || columna<0 || columna>cantCeldasVertical)
    return 0;
  if(matriz[columna][fila]!=valorFicha)
    return 0;
  return 1 + fCount(mx,my,columna+my,fila+mx,valorFicha);
}

function fCount2(mx,my,columna,fila,valorFicha)
{
  if(fila<0 || fila>cantCeldasVertical-1 || columna<0 || columna>cantCeldasVertical)
    return;
  if(matriz[columna][fila]!=valorFicha)
    return;
  posWinners[posi] = [columna, fila];
  posi++;
  fCount2(mx,my,columna+my,fila+mx,valorFicha);
}

function hayGanador(xFicha, yFicha){
  var valorFicha = matriz[xFicha][yFicha];
  for(var i=0;i<8;i+=2){
    var lado1=fCount(dx[i],dy[i],xFicha+dy[i],yFicha+dx[i],valorFicha);
    var lado2=fCount(dx[i+1],dy[i+1],xFicha+dy[i+1],yFicha+dx[i+1],valorFicha);
    if(lado1+lado2+1>=cantEnLinea){
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
  for(var i = 0; i<=cantEnLinea-1; i++){
    var x=posWinners[i][0];
    var y=posWinners[i][1];
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

function cambiarTurnoJugador(){
  jugador = (jugador == 1 ? 2 : 1);
  color = (jugador == 1 ? '#f7b731': '#eb3b5a');
}

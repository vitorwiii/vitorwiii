//variáveis da bolinha
let xbolinha=300
let ybolinha=200
let diametro=22
let radio = diametro / 2;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyoponente;

//velocidade da bolinha
let velocidadexbolinha=6;
let velocidadeybolinha=6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinharRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentaRaqueteOponente();
  colisaoRaqueteOponenteBiblioteca()
  incluiPlacar()
  marcaPonto()
}

function mostrabolinha(){
  circle(xbolinha,ybolinha,diametro);
}
function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}
 function verificaColisaoBorda(){
   if (xbolinha + radio> width ||
     xbolinha - radio < 0){
    velocidadexbolinha *= -1;
  }
  if (ybolinha + radio > height ||
     ybolinha - radio < 0){
    velocidadeybolinha *= -1;
 }
 }

function mostraRaquete(x , y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinharRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete +=10;
  }
}

function colisaoRaqueteOponenteBiblioteca() {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xbolinha, ybolinha, radio);
    if (colidiu){
        velocidadexbolinha *= -1;
    }
}

function verificaColisaoRaquete() {
    if (xbolinha - radio < xRaquete + raqueteComprimento && ybolinha - radio < yRaquete + raqueteAltura && ybolinha + radio > yRaquete) {
        velocidadexbolinha *= -1;
    }
}

function movimentaRaqueteOponente() {
    velocidadeyoponente = ybolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeyoponente
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
    if (xbolinha > 590) {
        meusPontos += 1;
    }
    if (xbolinha < 10) {
        pontosDoOponente += 1;
    }
}

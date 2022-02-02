var jogador;
var caminho;
var jogadorImg;
var caminhoImg;
function preload(){
  //imagens pré-carregadas;
  jogadorImg = loadAnimation("Runner-1.png","Runner-2.png");
  caminhoImg = loadImage("path.png");
  
  
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui;
 caminho =createSprite(200,200,400,400);
 caminho.addImage("caminho",caminhoImg)
 caminho.scale = 1.45;
 jogador = createSprite(width/2,360,100,100);
 jogador.addAnimation("camisa",jogadorImg);
 jogador.scale = 0.1;
 caminho.velocityY = 3;

}

function draw() {
  background(0);
  drawSprites()
  jogador.x = mouseX
 if(caminho.y <= 350){
 caminho.y = caminho.height/2;
 }
  
  
  
  
  
 
} 
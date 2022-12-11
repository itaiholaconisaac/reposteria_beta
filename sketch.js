var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var ingredientes;
var grupodeingredientes;
var mantequilla, huevos, azucar, vainilla, polvoparahornear,leche,harina,aceite,chispasdechocolate;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("images/flowers.jpg");
  player_img = loadImage("images/molde.png");
  mantequilla = loadImage("images/mantequilla.png");
  huevos = loadImage("images/huevo-2.png");
  vainilla = loadImage("images/vainilla.png");
  leche = loadImage("images/taza de leche.png");
  azucar = loadImage("images/taza de azucar.png");
  polvoparahornear = loadImage("images/tazon de polvo para hornear.png");
  harina = loadImage("images/taza y media de harina.png");
  aceite = loadImage("images/aceite.png");
  chispasdechocolate = loadImage("images/chispas de chocolate.png");
  
  
  grupodeingredientes= new Group();

  obstacleImage = loadImage("images/mushroom.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
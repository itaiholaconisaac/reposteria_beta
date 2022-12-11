class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.scale= 0.25;
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.scale= 0.25;
    players=[player1,player2];

    obstacleGroup = new Group();
    
        console.log(frameCount)
       
        }
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                player.getPlayerAtEnd();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Jugador 1 :" +allPlayers.player1.score,50,50);
                        text("Jugador 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                if(player.score>=5){
                    gameState = 2; 
                    player.rank += 1;
                    Player.updatePlayerAtEnd(player.rank);
                    player.update();
                    this.showRank();
                    
                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     ingredientes = createSprite(random(100, 1000), 0, 100, 100);
                     ingredientes.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: ingredientes.addImage("ingredientes",mantequilla);
                         break;
                         case 2: ingredientes.addImage("ingredientes", huevos);
                         break;
                         case 3: ingredientes.addImage("ingredientes", vainilla);
                         break;
                         case 4: ingredientes.addIma("ingredientes",leche);
                         break;
                         case 5: ingredientes.addImage("ingredientes", azucar);
                         break;
                         case 6: ingredientes.addImage("ingredientes",polvoparahornear);
                         break;
                         case 7: ingredientes.addImage("ingredientes",harina);
                         break;
                         case 8: ingredientes.addImage("ingredientes",aceite);
                         break;
                         case 9: ingredientes.addImage("ingredientes",chispasdechocolate);
                         break;
                     }
                     grupodeingredientes.add(ingredientes);
                     
                     
                 }
                 if(frameCount % 40 === 0){
                    this.addObstacles()
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < grupodeingredientes.length; i++) {
                          if (grupodeingredientes.get(i).isTouching(players)) {
                              grupodeingredientes.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              

                          }
                  
                          
                      }

                      if(obstacleGroup.isTouching(players)){
                        gameState = 2;
                      }
                  }
                }
            
                

         
         
        
         

    
                showRank() {
                    alert("¡Impresionante! ¡Terminaste el juego! Tu posición es:" +player.rank)
                  }

                  gameOver() {
                    textSize(40)
                    fill("white")
                    text("FIN DEL JUEGO",displayWidth/2-400,displayHeight/2-200)
                    }
    
    end(){
       console.log("Juego terminado");
       console.log(player.rank)
       this.gameOver();
    }


    addObstacles()
    {
       
            var x, y;
      
            x = random(0, width-100);
            y = 0
                var obstacle = createSprite(x, y);
                obstacle.addImage("obstacle", obstacleImage);
                obstacle.velocityY = 4;
          
                obstacle.scale = 0.15;
                obstacleGroup.add(obstacle);
            
           
          
    }
}

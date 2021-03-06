 class Ball{
     constructor(x,y,radius){
         this.image=loadImage('polygon.png');
     }
    display(){
        imageMode(CENTER);
        image(this.image,ball.positionX,ball.positionY,40,40);
    }
 }
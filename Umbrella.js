class Umbrella{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.x=x;
        this.y=y;
        this.radius=20;
        this.umbrella= Matter.Bodies.circle(this.x,this.y,this.radius,options);
        this.boyImg = loadImage("walking_1.png");
    }
    display(){
        imageMode(CENTER);
        image(this.boyImg,this.x,this.y+20,200,200);
    }

}
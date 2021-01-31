class Drops{
    constructor(x,y){
        var options = {

            isStatic: false,
           'restitution':0,
           'friction':1.0,
           
       }
       this.x=x;
       this.y=y;
       this.radius=20;
       this.body = Matter.Bodies.circle(x,y,this.radius,options);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.x,this.y,20,20);
    }
    update(){
        if(this.body.position.y>height){

            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}
var batman;
var maxDrops;
var drops =[];


function preload(){
    
}

function setup(){
   createCanvas(700,800);
    batman = new Umbrella(300,600);
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
    
}

function draw(){
    background("black");
    
    for(var i=0;i<drops.length;i++){
     drops[i].display();
     drops[i].update();
    }
    batman.display();
    

}   


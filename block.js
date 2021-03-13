class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Wood-Transparent.png")
        World.add(world,this.body)
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            var pos = this.body.position
            imageMode(CENTER)
            fill("blue")
            image(this.image,0,0,80,80)            
            pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         imageMode(CENTER)
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
    }
}
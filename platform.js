class Platform{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.platform = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.platform)
    }
    display(){
    var pos = this.platform.position
    rectMode(CENTER);
    fill("white")
    rect(pos.x,pos.y,this.width,this.height)
    }
}
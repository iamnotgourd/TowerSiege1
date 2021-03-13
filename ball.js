class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.1
        }
        this.ball = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.ball)
    }
    display(){
        var pos = this.ball.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius*2)
    }
}
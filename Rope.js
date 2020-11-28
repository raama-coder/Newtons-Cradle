class Rope{

    constructor(body1, body2, x, y){

        this.offsetX=x;
        this.offsetY=y;
        this.body1pos=body1.body.position;
        this.body2pos=body2.body.position;

        var options = {
            bodyA:body1.body,
            bodyB:body2.body,
            length:20,
            stiffness:0.02,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        console.log(options);
        this.rope=Constraint.create(options);
        World.add(world, this.rope)
    }

    display(){
        strokeWeight(3)
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        line(point1.x, point1.y, point2.x, point2.y)
    }
}
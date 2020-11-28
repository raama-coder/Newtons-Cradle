class Roof
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;

        var option={
            isStatic: true
        }

        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,option);
       
        World.add(world,this.body)
    }

display() {
    rectMode(CENTER) 
    fill("brown"); 
    rect(this.x,this.y,this.w,this.h)
    }
}
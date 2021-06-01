class ground{
    constructor(x,y,hight,width){
        var options={
            isStatic:true,
            friction:0,
        }
        this.body=Bodies.rectangle(x,y,height,width,options);
        World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.image,0, 0, this.width, this.height);
        pop();
    }
}
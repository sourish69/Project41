class Umbrella
{
    constructor(x,y)
    {
       var options=
       {
            isStatic:true
       }
       this.x = x;
       this.y = y;
       this.body = Bodies.rectangle(x,y,130,250,options);
       this.color = color(255,0,0);
       this.image = loadImage("boy.jpg");
       World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        imageMode(CENTER);
        image(this.image,0, 0, 130,250);
        pop();
    }
}
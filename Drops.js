class Drops {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            isStatic:false,
            friction:0.0
        }
        
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 5,options);      
        this.color=color(140, 223, 232);
        World.add(world, this.body);

    }
    update()
    {
        if(this.body.position.y>500)
        {
            Matter.Body.setPosition(this.body, {x:random(0,1000), y:10});
        }
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, 5);
        pop();
    }

};
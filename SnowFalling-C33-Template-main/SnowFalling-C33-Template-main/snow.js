class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.image = loadImage("snow5.webp")
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,10,10) 
        pop();
    }

};
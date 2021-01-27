class Rubber{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        strokeWeight(4);
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}
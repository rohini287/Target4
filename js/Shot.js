class Shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 0.1
        }
       this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            ellipseMode(RADIUS);
  stroke("yellow");
  
  strokeWeight(5)
  ellipse(pointA.x-40,pointA.y+20,10,10);

        }
       

    }
    
}
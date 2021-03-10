class constraint{
    constructor(pointA, bodyB){
        var options = {
            bodyB: bodyB,
            pointA: pointA,
            stiffness: 0.1,
            length: 10
        }
        this.pointA = pointA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyB=null
    }
    attach(body){
        this.sling.bodyB=body
    }
}
   class Dart {
       constructor(x,y,r){
        var  options={
               isStatic:true
           }
           this.x=x
           this.y=y
           this.r=r
           this.image=loadImage("images/dart1.png");
           this.body=Bodies.circle(this.x,this.y,this.r,options);
           World.add(world,this.body);
       }
       display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red")
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*7.5, this.r*6.5);
       // ellipseMode(RADIUS);
       // ellipse(0,0,this.r,this.r);

        pop();
      }
       }
   
class roof {
    constructor(body1,body2,pointA,pointB){
        this.pointA=pointA
        this.pointB=pointB
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointA,y:this.pointB}
        }
        con = Matter.Constraint.create({
            pointA : {x : 120, y : 100},
            bodyB : ball1,
            //pointB : {x : 0, y : 0},
            length : 200,
            stiffness : 0.1
          });
          World.add(world,con);
    }

    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
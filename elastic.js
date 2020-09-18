class Elastic{
    constructor(bodyBoy,pointB){
        var options={
            bodyA:bodyBoy,
            pointB:pointB,
            stiffness:0.04,
            length:10
		}
		this.bodyA=bodyBoy;
        this.pointB=pointB;
         
		this.link=Constraint.create(options);
		World.add(world,this.link);
    }
    fly(){
        this.link.bodyA=null;
    }
    display(){
        if(this.link.bodyA){
            strokeWeight(4);
            var posA=this.link.bodyA.position;
             var posB=this.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
};
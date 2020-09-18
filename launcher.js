class Launcher{
    constructor(bodyBoy,pointB1){
        var options={
            bodyA:bodyBoy,
            pointB:pointB1,
            stiffness:0.04,
            length:10
		}
        this.link=Constraint.create(options);
		this.bodyA=bodyBoy;
        this.pointB=pointB1; 
		
		World.add(world,this.link);
    }
    fly(){
        this.link.bodyA=null;
    }

    attach(body){
        this.sling.bodyA = body;
        //console.log("hello");
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
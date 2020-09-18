class Mango{
    constructor (x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.mango=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("sprites/mango.png");
        World.add(world,this.mango);
    }
    display(){
        var pos=this.mango.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
};
class Tree{
    constructor (x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.tree=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("sprites/tree.png");
        World.add(world,this.tree);
    }
    display(){
        var pos=this.tree.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
};
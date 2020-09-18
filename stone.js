class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("sprites/stone.png");
        World.add(world,this.stone);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.stone.position.x,this.stone.position.y,this.radius,this.radius);
        
    }
};
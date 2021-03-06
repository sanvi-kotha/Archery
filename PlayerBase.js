class PlayerBase{
    constructor(x,y,width,height){

        var base_options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y,width,height,base_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base2.png");

        World.add(my_world,this.body);
    }

    display(){
        var my_pos = this.body.position;
        var my_angle = this.body.angle;
        push();
        translate(my_pos.x,my_pos.y);
        rotate(my_angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}

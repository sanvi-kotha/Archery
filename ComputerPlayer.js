class Computer{
    constructor(x,y,width,height){

        var computer_options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y,width,height,computer_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("player.png");

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

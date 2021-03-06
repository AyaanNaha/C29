class Ground {
    constructor(x,y,w,h) {
        
        let options = {
            isStatic:true
        };

        this.body = Matter.Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,136);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}
class CompBase {
    constructor (x, y, w, h) {
        this.xp = x;
        this.yp = y;
        
        this.width = w;
        this.height = h;
        
        var options = {
            isStatic : true,
        };

        this.body = Bodies.rectangle (this.xp, this.yp, this.width, this.height, options);
        
        this.image = loadImage ("./assets/base1.png");
    }

    display () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0, 0, this.width, this.height);
        pop ();
    }
}
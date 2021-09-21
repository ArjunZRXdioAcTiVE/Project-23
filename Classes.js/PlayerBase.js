class PlayerBase {
    constructor (x, y, w, h) {
        this.options = {
            isStatic : true,
        };

        this.xp = x; 
        this.yp = y;
        this.width = w;
        this.height = h;
        this.image = loadImage ("./assets/base1.png");

        this.body = Bodies.rectangle (this.xp, this.yp, this.width, this.height, this.options);
    
        this.image = loadImage ("./assets/base2.png");
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
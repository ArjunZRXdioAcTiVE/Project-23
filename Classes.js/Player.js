class Player {
    constructor (x, y, w, h) {
        this.xp = x;
        this.yp = y;
        this.width = w;
        this.height = h;
        
        this.body = Bodies.rectangle (this.xp, this.yp, this.width, this.height); 
    
        this.image = loadImage ("./assets/player.png");
    }

    display () {
        var pos = this.body.position;

        push ();
        imageMode (CENTER);
        image (this.image, pos.x, pos.y, this.width, this.height);
        pop ();
    }
}
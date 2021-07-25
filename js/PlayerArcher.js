class PlayerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
  
          World.add(world, this.body);
    }
  
     display() {
      if(keyIsDown(UP_ARROW)){
        this.angle +=0.3;
        }
                

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      Matter.Body.setAngle(this.body,-PI/2); 
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
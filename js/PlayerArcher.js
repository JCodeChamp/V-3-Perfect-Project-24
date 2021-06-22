class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("./assets/playerArcherRotated.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, PI); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      if (keyIsDown(DOWN_ARROW) && angle < 3.61 ) { //&& angle < -1.2 
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
        console.log(angle);
      }
  
      if (keyIsDown(UP_ARROW)&& angle > 2.69 ) { //&& angle > -1.9   && angle > 3.37
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
        
       
        
      }
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  
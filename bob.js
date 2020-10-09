class Bob {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      
      this.image = loadImage ("sprites/paper.png");
      this.width = width;
      this.height = height;
      
      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  
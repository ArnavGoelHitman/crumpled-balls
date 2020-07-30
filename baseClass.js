class BaseClass {
    constructor() {
      var options = {
          isStatic:false,
          restitution:0,
          friction:0.5,
          density:1.2,
          
         
      }
      this.body = Bodies.circle(100,500,30,options);
      this.radius = 15;
      this.image = loadImage("images/paper.png");
      
      
      World.add(world, this.body);
      console.log(this.body);
    }
    display(){
      var pos =this.body.position;
  
     fill("purple");
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,15,15);
      imageMode(CENTER);
      
     image(this.image,100,500,15);
     
      
    
   
    }
  }
  
  
  
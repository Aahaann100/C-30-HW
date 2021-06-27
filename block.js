class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
       this.image= loadImage("block.png")
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
      
        if(this.body.speed>3){
          World.remove(world,this.body)
          this.visibility=this.visibility-5
          tint(255,this.visibility)
          image(this.image,pos.x,pos.y,30,40)
        }else{
         
          translate(pos.x, pos.y);
          rotate(angle);
          ///rectMode(CENTER);
          //rect(0,0,this.width, this.height);
          imageMode(CENTER)
          image(this.image,0,0,30,40)
      
        }
        pop();
      }
}

class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trejectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var p = this.body.position;
    if(this.body.velocity.x>10 && p.x>200){
      var pos = [p.x,p.y];
      this.trejectory.push(pos);
    }
    for(var i=0;i<this.trejectory.length;i++){
      image(this.image2,this.trejectory[i][0],this.trejectory[i][1]);
    }
  }
}

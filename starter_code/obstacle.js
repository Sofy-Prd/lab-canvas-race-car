function random(from, to) {
  return (from + Math.random()*(to-from));
}

class Obstacle {
  constructor() {
    this.w=random(200,600);
    this.h=75;
    this.x=random(0,W-this.w);
    this.y=0;
    
  }

  draw() {
    ctx.fillStyle="red";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    
  }

  hits(car) {
    if ( (((this.x<car.x)&&(this.x+this.w>car.x))||
    ((this.x<car.x+car.w)&&(this.x +this.w>car.x+car.w)))
    && (((this.y+100)>car.y)&&((this.y+100)<car.y+car.h)) ){
      gameover=true;
    }
  
  }
}
class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w=100;
      this.h=this.w/imgRatio;
      this.x=500;
      this.y=1300;
     
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x,this.y,this.w,this.h);
      }
     

  moveLeft() {
    if (this.x>130) {
      this.x-= 20;
      }
    }
  
  moveRight() {
    if (this.x<760){
   
      this.x+= 20;
    }
   }
   
  }

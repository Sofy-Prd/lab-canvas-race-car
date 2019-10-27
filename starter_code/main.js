let car;
let obstacles=[];
let gameover;
let points=0;


const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  ctx.fillStyle="green";
  ctx.fillRect(0,0, W, H);

  ctx.fillStyle="grey";
  ctx.fillRect(100,0, W-200, H);

  ctx.fillStyle="white";
  ctx.fillRect(120,0, 20, H);
  ctx.fillRect(860,0, 20, H);

  var x = 500;
  var y= 0;
  ctx.beginPath();
  
  ctx.setLineDash([80, 80]);
  ctx.moveTo(x, y);
  ctx.lineTo(x, H);
  ctx.lineWidth=10;
  ctx.strokeStyle="white";
  ctx.stroke();
  
  // Iteration 2: car drawing
    car.draw();
  
  // Iteration #4: obstacles
  obstacles.forEach(function(el){el.draw()})
  
  // Iteration #5: collisions
  obstacles.forEach(function(el){el.hits(car)});
  
  // Iteration #6: points
  
  var xScore =150;
  var yScore=50;
  var scoreText=`SCORE = ${points}`;
  ctx.fillStyle = "white";
  ctx.font = '50px serif';
  ctx.fillText(scoreText, xScore, yScore, 400);
   
}


document.onkeydown = function (e) {
  if (!car) return;

  if (e.keyCode===37) {
    car.moveLeft();}
  
  if (e.keyCode===39) {
    car.moveRight();
  
  }
}

let frames = 0;
function animLoop() {
  frames++;
  obstacles.forEach(function(el){
    el.y+=2;
  });
  if (frames%300===0){
    obstacles.push(new Obstacle())
    points++
  };
  draw()
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car= new Car();
  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
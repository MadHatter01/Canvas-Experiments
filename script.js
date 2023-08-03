var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.fillRect(100, 100, 50, 50);

function Circle(radius, x, y, dx, dy) {
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.render = () => {
    // for (let i = 0; i < 100; i++) {
    //   let x = Math.random() * window.innerWidth;
    //   let y = Math.random() * window.innerHeight;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "green";
    ctx.stroke();
  };
  this.updateDisplay = () => {
    if (this.x > window.innerWidth - this.radius || this.x < this.radius) {
      this.dx = -this.dx;
    }
    if (this.y > window.innerHeight - this.radius || this.y < this.radius) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.render();
  };
}

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var speed = 4;

var dx = (Math.random() - 0.5) * speed;
var dy = (Math.random() - 0.5) * speed;
var circle = new Circle(20, x, y, dx, dy);
circle.render();
circle.updateDisplay();

var radius = 30;
const looper = () => {
  requestAnimationFrame(looper);
  // let x = Math.random() * window.innerWidth;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circle.updateDisplay();
 
};
looper();

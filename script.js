var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height =  window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.fillRect(100,100, 50,50);




for (let i = 0; i< 100; i++){
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  ctx.beginPath()
  ctx.arc(x, y, 20, 0, Math.PI*2, false)
  ctx.strokeStyle = 'green'  
  ctx.stroke();
}

var x = 100;
var velocity = 5
var radius = 20
const looper = () => {
  requestAnimationFrame(looper)
    // let x = Math.random() * window.innerWidth;
  ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
  ctx.beginPath()
  ctx.arc(x, 100, radius, 0, Math.PI*2, false)
  ctx.strokeStyle = 'green'  
  ctx.stroke();
console.log(x, window.innerWidth)
  if (x > window.innerWidth - radius || x < radius){
    velocity = -velocity
  }
   x+=velocity
}

looper()

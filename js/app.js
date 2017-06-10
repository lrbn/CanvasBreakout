var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var colors = ["red", "blue", "green", "yellow", "purple", "pink"];
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballRadius = 10;
var dx = 2;
var dy = -2;

function drawBall(fillStyle) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    var randomColor = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    ctx.fillStyle = colors[randomColor];
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    var randomColor = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    ctx.fillStyle = colors[randomColor];
    dy = -dy;
  }
  x += dx;
  y += dy;
}
setInterval(draw, 1);
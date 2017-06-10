var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var colors = ["red", "blue", "green", "yellow", "purple", "pink"];
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballRadius = 10;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

function drawBall(fillStyle) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
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
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
  x += dx;
  y += dy;
}

function keyDownHandler(ev) {
  if (ev.keyCode == 39) {
    rightPressed = true;
  } else if (ev.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(ev) {
  if (ev.keyCode == 39) {
    rightPressed = false;
  } else if (ev.keyCode == 37) {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
setInterval(draw, 10);
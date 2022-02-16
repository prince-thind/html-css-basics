const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

fitToScreen(canvas);
animate();

function animate() {
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  animateCircle();
  requestAnimationFrame(animate);
}

function animateCircle(){
    ctx.strokeStyle='white'
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2); // Outer circle
    ctx.stroke();
}

function fitToScreen(canvas) {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

fitToScreen(canvas);

function fitToScreen(canvas) {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
}

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

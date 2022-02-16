const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Particle {
  constructor(positionX, positionY) {
    this.x = positionX ?? Math.random() * window.innerWidth;
    this.y = positionY ?? 0;
    this.size = Math.random() * 10;
    this.speedX = Math.random() - 0.5;
    this.speedY = Math.random();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX = Math.random() - 0.5;
    this.speedY = Math.random() * 5;
    if (this.size > 0.5) this.size -= 0.01;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
  }
}

let particles = [];

fitToScreen(canvas);
init();
animate();

function animate() {
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  animateParticles();
  requestAnimationFrame(animate);
}

function animateParticles() {
  for (const particle of particles) {
    particle.draw();
    particle.update();
  }
  refreshParticles();
}

function init() {
  for (let i = 0; i < 100; i++) {
    const particle = new Particle(
      window.innerWidth * Math.random(),
      window.innerHeight * Math.random()
    );
    particles.push(particle);
  }
}

function refreshParticles() {
  while (particles.length < 100) {
    const particle = new Particle();
    particles.push(particle);
  }
  particles = particles.filter((p) => p.y <= canvas.height - 20);
}

function fitToScreen(canvas) {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
}

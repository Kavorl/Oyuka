const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w, h, flakes = [];

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function Snowflake() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.r = Math.random() * 3 + 1;
    this.vy = Math.random() * 1 + 0.5;
    this.alpha = Math.random() * 0.7 + 0.3;
}

function createFlakes() {
    for (let i = 0; i < 150; i++) {
        flakes.push(new Snowflake());
    }
}
createFlakes();

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.beginPath();

    flakes.forEach(f => {
        ctx.globalAlpha = f.alpha;
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

        f.y += f.vy;
        if (f.y > h) {
            f.y = -10;
            f.x = Math.random() * w;
        }
    });

    ctx.fill();
    requestAnimationFrame(draw);
}
draw();

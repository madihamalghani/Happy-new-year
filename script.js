const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

const confettiColors = ['#ff007f', '#ffcc00', '#00ccff', '#ffffff', '#00ff00'];
const confettiArray = [];

class Confetti {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
        this.size = Math.random() * 10 + 5;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.speed = Math.random() * 3 + 2;
        this.spin = Math.random() * 360;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.y += this.speed;
        this.spin += 2;
        if (this.y > confettiCanvas.height) this.y = -this.size;
        this.draw();
    }
}

for (let i = 0; i < 94; i++) {
    confettiArray.push(new Confetti());
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiArray.forEach(confetti => confetti.update());
    requestAnimationFrame(animateConfetti);
}

function startParty() {
    animateConfetti();
    document.getElementById('hiddenMessage').style.display = 'block';
}

window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

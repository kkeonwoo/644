// mainVisual canvas
const canvas = $("#canvas")[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const openingTxt = new Image();
openingTxt.src = "../images/main/nc644-opening-text.svg";

class Opening {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.width = 247 * 1.2;
    this.height = 132 * 1.2;
    this.speedY = 0.5;
  }
  draw() {
    ctx.drawImage(openingTxt, this.x - this.width / 2, this.y, this.width, this.height);
  }
  update() {
    this.y -= this.speedY;
    this.draw();
  }
}
const openingList = [];
const openingList02 = [];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 5; j++) {
    if (j % 2 === 1) {
      const openings = new Opening(j * 440, i * 400 - 200);
      openingList.push(openings);
    } else {
      const openings = new Opening(j * 440, i * 400);
      openingList.push(openings);
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  $.each(openingList, function (idx, item) {
    item.update();
  });
  window.requestAnimationFrame(animate);
}
animate();

// mainVisual canvas
const canvas = $("#canvas")[0]; // canvas DOM
const ctx = canvas.getContext("2d"); // rendering context type "2d"
canvas.width = window.innerWidth; // canvas width
canvas.height = window.innerHeight; // canvas height
// global scope
const distanceX = (canvas.width - 247 * 4) / 4 + 247;
const distanceY = (canvas.height - 132 * 3) / 2 + 132;
// txtImg Array
const openingList = [];
// txtImg
const openingTxt = new Image(); // create new image
openingTxt.src = "../images/main/nc644-opening-text.svg"; // source path
//txt constructor
class Opening {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.width = 247;
    this.height = 132;
    this.speedY = 0.5;
  }
  draw() {
    ctx.drawImage(openingTxt, this.x - this.width / 2, this.y, this.width, this.height);
  }
  update() {
    this.y -= this.speedY;
    this.draw();
    // y값이 화면을 벗어나면 위치 초기화
    if (this.y < -this.height) {
      this.y = canvas.height + this.height;
    }
  }
}

// prettier-ignore
for (let i = 0; i < 3; i++) { // i = Y축
  for (let j = 0; j < 5; j++) { // j = X축
    if (j % 2 === 1) {
      const openings = new Opening(j * distanceX, i * distanceY + distanceY / 2);
      openingList.push(openings);
    } else {
      const openings = new Opening(j * distanceX, i * distanceY);
      openingList.push(openings);
    }
  }
}

// animate txtImg
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 비우기
  $.each(openingList, function (idx, item) {
    item.update();
  });
  window.requestAnimationFrame(animate); // loop
}
animate();

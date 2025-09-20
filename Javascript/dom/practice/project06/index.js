// 绘图 -> 1.按下鼠标准备绘图  2.移动鼠标绘图 3.松开鼠标停止
// 重置
// 下载

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector('#clear');
const saveBtn = document.querySelector('#save');

let painting = false;
let startPoint = { x: 0, y: 0 };

canvas.onmousedown = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  startPoint = { x: x, y: y };
  painting = true;
};

canvas.onmousemove = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  let newPoint = { x: x, y: y };

  if (painting) {
    draw(startPoint.x, startPoint.y, newPoint.x, newPoint.y);
  }
  startPoint = newPoint;
};

canvas.onmouseup = () => {
  painting = false;
};

function draw(xStart, yStart, xEnd, yEnd) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  ctx.closePath();
}

clearBtn.addEventListener('click', () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener('click', () => {
  const url = canvas.toDataURL('image/jpg');

  const a = document.createElement('a');
  a.href = url;
  a.download = '图片';
  a.click();
});

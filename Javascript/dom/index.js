// 标记是否正在绘画
let painting = false;

// 记录上一次绘画的起点坐标
let startPoint = { x: undefined, y: undefined };

// 获取画布元素
const canvas = document.getElementById('canvas');
// 获取 canvas 的 2D 绘图上下文（画笔）
const ctx = canvas.getContext('2d');

// 获取“清空”按钮
const clearBtn = document.querySelector('#clear');
// 获取“保存”按钮
const saveBtn = document.querySelector('#save');

// 当鼠标按下时，开始绘画
canvas.onmousedown = (e) => {
  // 获取鼠标在画布内的坐标（相对于 canvas 左上角）
  let x = e.offsetX;
  let y = e.offsetY;

  // 记录起点位置
  startPoint = { x: x, y: y };

  // 打开绘画开关
  painting = true;
};

// 当鼠标移动时，如果正在绘画，就画线
canvas.onmousemove = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  // 当前鼠标位置
  let newPoint = { x: x, y: y };

  // 如果处于绘画状态，画一条线：从上一个点到当前位置
  if (painting) {
    drawLine(startPoint.x, startPoint.y, newPoint.x, newPoint.y);

    // 更新起点，下一次移动时从这里继续画
    startPoint = newPoint;
  }
};

// 当鼠标抬起时，结束绘画
canvas.onmouseup = () => {
  painting = false; // 关闭绘画开关
};

// 封装画线函数：起点 (xStart,yStart) 到终点 (xEnd,yEnd)
function drawLine(xStart, yStart, xEnd, yEnd) {
  ctx.beginPath(); // 开始新路径
  ctx.lineWidth = 3; // 设置线条宽度
  ctx.moveTo(xStart, yStart); // 移动画笔到起点
  ctx.lineTo(xEnd, yEnd); // 连接到终点
  ctx.stroke(); // 绘制线条
  ctx.closePath(); // 结束路径，防止下一次自动连接
}

// 点击“清空”按钮：用白色矩形覆盖整个画布
clearBtn.onclick = () => {
  ctx.fillStyle = '#ffffff'; // 设置填充颜色为白色
  ctx.fillRect(0, 0, canvas.width, canvas.height); // 填满整个画布
};

// 点击“保存”按钮：导出画布为图片并下载
saveBtn.onclick = () => {
  // 把画布内容转为 base64 图片（JPG 格式）
  const url = canvas.toDataURL('image/jpg');

  // 创建一个 <a> 标签，模拟点击进行下载
  const a = document.createElement('a');
  a.href = url; // 设置链接为图片数据
  a.download = '画板'; // 设置下载文件名
  a.target = '_blank'; // 在新标签页打开（备用）
  a.click(); // 触发点击，自动下载
};

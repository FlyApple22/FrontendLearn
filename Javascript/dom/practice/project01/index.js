// 后台随机的正确答案
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let hightScore = document.querySelector('.highscore');
let scoreNumber = 20;

// 用户猜的答案

// 文字提示
let message = document.querySelector('.message');

// 分数
let score = document.querySelector('.score');

// check按钮事件监听
let btn = document.querySelector('.check');
btn.addEventListener('click', compare);

// again按钮事件监听
let btnAgain = document.querySelector('.again');
btnAgain.addEventListener('click', init);

function compare() {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (secretNumber > guessNumber && guessNumber !== 0) {
    message.textContent = '猜小啦 ⬇️';
    scoreNumber--;
    score.textContent = scoreNumber;
  } else if (secretNumber < guessNumber) {
    message.textContent = '猜大啦 ⬆';
    score.textContent--;
  } else if (guessNumber === 0) {
    message.textContent = '未输入';
  } else {
    message.textContent = '成功啦 🎉';
    hightScore.textContent = scoreNumber - 1;
    document.querySelector('body').style.backgroundColor = 'rgb(86, 250, 86)';
  }
}

// guessNumber为空 展示XXXXX
function init() {
  scoreNumber = 20;
  score.textContent = scoreNumber;
  message.textContent = '开始吧！！！';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
}

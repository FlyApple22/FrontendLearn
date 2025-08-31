// 1. 17 \ 18行作用是什么？
// 2. switchPlayer（）这个函数的实现原理是什么？

// 拿到 掷骰子 换边 新游戏 btn
/* // 绑定click时间 */

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scorePlay1 = document.querySelector('#score--1');
const currentPlay1 = document.querySelector('#current--1');
const scorePlay2 = document.querySelector('#score--2');
const currentPlay2 = document.querySelector('#current--2');
const dice = document.querySelector('.dice');
const playerActive = document.querySelector('.player');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');

let playing = 1;
let currentCount = 0;

function scoreNumber() {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `img/dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    currentCount += diceNumber;
    document.getElementById(`current--${playing}`).textContent = currentCount;
  } else {
    currentCount = 0;
    document.getElementById(`current--${playing}`).textContent = currentCount;
    switchPlayer();
  }
}

function switchPlayer() {
  playing = playing === 1 ? 2 : 1;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}
// 36交换角色 ， 37、38交换角色样式

btnRoll.addEventListener('click', scoreNumber);

//主动换边

let count = [0, 0];
function countAdd() {
  playing === 1 ? (count[0] += currentCount) : (count[1] += currentCount);
  document.getElementById(`score--${playing}`).textContent = count[playing - 1];
  currentCount = 0;
  document.getElementById(`current--${playing}`).textContent = currentCount;
  if (count[0] >= 10) {
    player1.classList.add('player--winner');
  } else if (count[1] >= 10) {
    player2.classList.add('player--winner');
  }
}

btnHold.addEventListener('click', countAdd);

function newGame() {
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  count = [0, 0];
  document.getElementById(`score--${1}`).textContent = 0;
  document.getElementById(`score--${2}`).textContent = 0;
}
btnNew.addEventListener('click', newGame);

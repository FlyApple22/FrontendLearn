// 1 step 拿到元素 getElement

// 2 step 绑定事件
// 2.1 点击按钮 -> 弹窗 毛玻璃
// 拿到button循环 只要有一个被点击 -> 弹窗 毛玻璃
// 2.2  X 点击毛玻璃 键盘Esc -> 回到主界面

const openModalBtn = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const closeModalBtn = document.querySelector('.close-modal');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModal();
  }
});

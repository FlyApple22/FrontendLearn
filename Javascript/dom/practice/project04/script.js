const panel = document.querySelectorAll('.panel');
panel.forEach((a) => {
  a.addEventListener('click', () => {
    removeActive();
    a.classList.add('active');
  });
});
function removeActive() {
  panel.forEach((a) => {
    a.classList.remove('active');
  });
}

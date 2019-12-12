'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);
    btn.textContent = n;

    switch (n) {
      case 0:
        btn.textContent= '名前は土田哲也です';
        break;
      case 1:
        btn.textContent = '昭和47年3月1日生まれ';
        break;
      case 2:
        btn.textContent = '石川県に住んでいます';
    }
  });
}
'use strict'; 

const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');

target1.addEventListener('click', () => { 
   target1.classList.add('circle1');
   target1.textContent = '';
});
target2.addEventListener('click', () => { 
   target2.classList.add('circle2');
   target2.textContent = '趣味はブラウザ三国志です';
});   
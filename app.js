let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let btn = document.getElementById('btn');
let bigpaintpurple = document.getElementById('bigpaintpurple');
let paintdrop1 = document.getElementById('paintdrop1');
let paintdrop2 = document.getElementById('paintdrop2');
let digitalartist = document.getElementById('digitalartist');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text1.style.marginTop = value * 2.5 + 'px';
    text2.style.marginTop = value * 2.5 + 'px';
    text3.style.marginTop = value * 2.5 + 'px';
    btn.style.marginTop = value * 2.5 + 'px';
    paintdrop1.style.left = value * -1.5 + 'px';
    paintdrop2.style.left = value * 1.5 + 'px';
   
    text1.style.zIndex = -2;
    text2.style.zIndex = -2;
    text3.style.zIndex = -2;
    btn.style.zIndex = -1;
  
   
});


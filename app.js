let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let btn = document.getElementById('btn');
let bigpaintpurple = document.getElementById('bigpaintpurple');
let paintdrop1 = document.getElementById('paintdrop1');
let paintdrop2 = document.getElementById('paintdrop2');
let digitalartist = document.getElementById('digitalartist');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    // Set maximum and minimum values for marginTop
    let marginTopValue = Math.min(Math.max(value * 2.5, 0), 500);
    text1.style.marginTop = marginTopValue + 'px';
    text2.style.marginTop = marginTopValue + 'px';
    text3.style.marginTop = marginTopValue + 'px';
    btn.style.marginTop = marginTopValue + 'px';

    // Set maximum and minimum values for left
    paintdrop1.style.left = Math.min(Math.max(value * -1.5, -100), 100) + 'px';
    paintdrop2.style.left = Math.min(Math.max(value * 1.5, -100), 100) + 'px';

    text1.style.zIndex = -2;
    text2.style.zIndex = -2;
    text3.style.zIndex = -2;
    btn.style.zIndex = -1;
});



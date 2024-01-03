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
    let marginTopValue = Math.min(Math.max(value * 2.5, 0), 900);
    text1.style.marginTop = marginTopValue + 'px';
    text2.style.marginTop = marginTopValue + 'px';
    text3.style.marginTop = marginTopValue + 'px';
    btn.style.marginTop = marginTopValue + 'px';

    // Set maximum and minimum values for left
    paintdrop1.style.left = Math.min(Math.max(value * -1.5, -100), 300) + 'px';
    paintdrop2.style.left = Math.min(Math.max(value * 1.5, -100), 300) + 'px';

    text1.style.zIndex = -2;
    text2.style.zIndex = -2;
    text3.style.zIndex = -2;
    btn.style.zIndex = -1;
});


/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
        function hideSidebar () {
            const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none'
        
        }





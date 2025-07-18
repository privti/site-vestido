const menuIcon = document.getElementById('menu-icon');
const menuNav = document.getElementById('menu-nav');
let menu1Nav = document.querySelector('#menu-nav');
let menu1Icon = document.querySelector('#menu-icon');


menu1Icon.addEventListener('click',  () => {
    if (menuNav.style.display === 'block') {   
        menuNav.style.display = 'none';
        menuNav.style.opacity = '0';
        menuNav.style.transform = 'translateY(-20px)';
    } else {
        menuNav.style.display = 'block';                
        menuNav.style.opacity = '1';
        menuNav.style.transform = 'translateY(0)';
    }
});



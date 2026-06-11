const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.getElementById('menu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    
    navMenu.classList.toggle('active');
    
    const active = navMenu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);
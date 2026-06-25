const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('mostrar');
});
var buttonUp = document.getElementById('button-up');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        buttonUp.style.display = 'flex';
    } else {
        buttonUp.style.display = 'none';
    }
});

buttonUp.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
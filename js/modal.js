const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');
const modalBtn = document.getElementById('modal-btn');

// Agregar evento click a todas las imagenes de galeria
document.querySelectorAll('.img-galeria').forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        imgModal.src = this.src;
        imgModal.alt = this.alt;
    });
});

// Cerrar modal con boton
modalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar modal clickeando fuera
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
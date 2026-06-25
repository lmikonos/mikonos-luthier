var botones = document.querySelectorAll('.btn-filtro');
var columnas = document.querySelectorAll('.galeria .columna[data-categoria]');

botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        var filtro = this.getAttribute('data-filtro');

        // Actualizar boton activo
        botones.forEach(function(b) {
            b.classList.remove('btn-filtro-activo');
        });
        this.classList.add('btn-filtro-activo');

        // Filtrar elementos
        columnas.forEach(function(col) {
            if (filtro === 'todos' || col.getAttribute('data-categoria') === filtro) {
                col.classList.remove('columna-hidden');
            } else {
                col.classList.add('columna-hidden');
            }
        });
    });
});
var tipoConsulta = document.getElementById('tipo-consulta');
var campoInstrumento = document.getElementById('campo-instrumento');
var campoMaderas = document.getElementById('campo-maderas');

tipoConsulta.addEventListener('change', function() {
    var valor = this.value;

    // Mostrar/ocultar campo de instrumento
    if (valor === 'pedido-instrumento' || valor === 'pedido-personalizado') {
        campoInstrumento.classList.add('activo');
        campoMaderas.classList.add('activo');
    } else {
        campoInstrumento.classList.remove('activo');
        campoMaderas.classList.remove('activo');
    }
});
// Descripcion de cada madera
const maderas = {
    // Tapas
    abeto: 'Abeto (Spruce): Madera clásica para tapas armónicas. Sonido brillante, proyectado y con gran volumen. Ideal para guitarras clásicas y cuatros.',
    cedro: 'Cedro (Cedar): Tapa cálida y oscura. Sonido redondo, dulce y con mucho cuerpo. Excelente para charangos y ronrocos.',
    pino: 'Pino Engelmann: Similar al abeto pero con un tono más cálido. Buena proyección y respuesta rápida.',
    // Fondos
    palosanto: 'Palosanto de India (Rosewood): La madera más utilizada para fondos y aros. Sonido profundo, resonante con graves potentes y agudos definidos.',
    nogal: 'Nogal (Walnut): Tono cálido y equilibrado. Más ligero que el palosanto. Excelente para instrumentos de cámara.',
    maple: 'Arce (Maple): Sonido brillante y ataque definido. Muy usado en guitarras eléctricas y mandolinas.',
    cipres: 'Cípres (Cypress): Madera tradicional para flamenco. Sonido percusivo, brillante y con mucho ataque.',
    // Mangos
    'cedro-mango': 'Cedro para mango: Cómodo, liviano y estable. El favorito para guitarras clásicas.',
    'maple-mango': 'Arce para mango: Rígido y resistente. Ideal para guitarras eléctricas y charangos eléctricos.',
    caoba: 'Caoba (Mahogany): Sonido cálido con énfasis en los medios. Muy estable y fácil de trabajar.',
    // Diapasones
    ebano: 'Ebano (Ebony): Madera oscura y densa. Tacto suave y rápido. El preferido para instrumentos de alta gama.',
    palisandro: 'Palisandro (Rosewood): Similar a ebano pero con un tono ligeramente más cálido. Muy duradero.',
    wenge: 'Wenge: Madera africana dura y oscura. Aspecto distintivo y excelente durabilidad.'
};

// Nombres amigables para el resumen
const nombresMaderas = {
    abeto: 'Abeto (Spruce)',
    cedro: 'Cedro (Cedar)',
    pino: 'Pino Engelmann',
    palosanto: 'Palosanto de India',
    nogal: 'Nogal (Walnut)',
    maple: 'Arce (Maple)',
    cipres: 'Cípres (Cypress)',
    'cedro-mango': 'Cedro',
    'maple-mango': 'Arce (Maple)',
    caoba: 'Caoba (Mahogany)',
    ebano: 'Ebano (Ebony)',
    palisandro: 'Palisandro (Rosewood)',
    wenge: 'Wenge'
};

// Inicializar selectores
document.querySelectorAll('.select-madera').forEach(function(select) {
    select.addEventListener('change', function() {
        var parte = this.getAttribute('data-parte');
        var valor = this.value;

        // Actualizar descripcion
        var descEl = document.getElementById('desc-' + parte);
        if (valor && maderas[valor]) {
            descEl.textContent = maderas[valor];
        } else {
            descEl.textContent = '';
        }

        // Actualizar resumen
        var resEl = document.getElementById('res-' + parte);
        if (valor && nombresMaderas[valor]) {
            resEl.textContent = nombresMaderas[valor];
        } else {
            resEl.textContent = 'Sin seleccionar';
        }
    });
});
// Boton "Consultar este diseño"
var btnConsultar = document.getElementById('btn-consultar');
if (btnConsultar) {
    btnConsultar.addEventListener('click', function() {
        var tapa = document.getElementById('select-tapa').value;
        var fondo = document.getElementById('select-fondo').value;
        var mango = document.getElementById('select-mango').value;
        var diapason = document.getElementById('select-diapason').value;

        var params = [];
        params.push('tipo=pedido-personalizado');

        if (tapa) params.push('tapa=' + encodeURIComponent(tapa));
        if (fondo) params.push('fondo=' + encodeURIComponent(fondo));
        if (mango) params.push('mango=' + encodeURIComponent(mango));
        if (diapason) params.push('diapason=' + encodeURIComponent(diapason));

        window.location.href = 'contacto.html?' + params.join('&');
    });
}
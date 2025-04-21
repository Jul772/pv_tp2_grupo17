const paiselect = document.getElementById("pais");
const capitalselect = document.getElementById("capital");
let textoDeLaOpcion;

function sincronizarSelects(origenSelect, destinoSelect) {
    const origen = origenSelect.options[origenSelect.selectedIndex];
    const destino = destinoSelect.options[destinoSelect.selectedIndex];
    destinoSelect.querySelectorAll('option').forEach(option => {
        if (option.value == origen.value) {
            destino.text = option.text;
            textoDeLaOpcion = option.text;
            console.log(textoDeLaOpcion);
        }
    });
}

paiselect.addEventListener('change', () => {
    sincronizarSelects(paiselect, capitalselect);
});

capitalselect.addEventListener('change', () => {
    sincronizarSelects(capitalselect, paiselect);
});
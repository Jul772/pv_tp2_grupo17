const selectPais = document.getElementById("pais");
const selectCapital = document.getElementById("capital");
let textoOpcion;

const sincronizarSelects = (selectOrigen, selectDestino) => {
    const opcionOrigen = selectOrigen.options[selectOrigen.selectedIndex];
    const opcionDestino = selectDestino.options[selectDestino.selectedIndex];
    selectDestino.querySelectorAll('option').forEach(opcion => {
        if (opcion.value == opcionOrigen.value) {
            opcionDestino.text = opcion.text;
            textoOpcion = opcion.text;
            console.log(opcionOrigen.text, "fue seleccionado y el otro select se actualizó a", opcionDestino.text);
        }
    });
};

selectPais.addEventListener('change', () => {
    sincronizarSelects(selectPais, selectCapital);
});

selectCapital.addEventListener('change', () => {
    sincronizarSelects(selectCapital, selectPais);
});
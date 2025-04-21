const radios = document.querySelectorAll('input[name="lenguaje"]');
const opcelegida = document.getElementById('opcele');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            console.log("El leguaje elegido es", radio.value);
            opcelegida.textContent = `Lenguaje seleccionado: ${radio.value}`;

        }
    });
});

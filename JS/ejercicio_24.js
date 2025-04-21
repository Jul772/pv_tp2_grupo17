const cambio = document.getElementById('bgchange');
cambio.addEventListener('click', () => {
    const colorandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = colorandom;
    cambio.style.backgroundColor = colorandom;
    console.log(`Color de fondo cambiado a: ${colorandom}`);

});

const input = document.getElementById("campoTexto");
const salida = document.getElementById("mostrarTexto");

input.addEventListener("input", () => {
    const valor = input.value;
    salida.textContent = valor;

    if (valor.length > 20) {
        salida.classList.add("largo");
    } else {
        salida.classList.remove("largo");
    }
});
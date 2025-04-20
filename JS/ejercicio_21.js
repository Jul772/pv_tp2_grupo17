const actualizarTexto = () => {
    const entradaTexto = document.querySelector("#entradaTexto");
    const textoMostrado = document.querySelector("#textoMostrado");
    textoMostrado.textContent = entradaTexto.value;
};

export { actualizarTexto };

document.querySelector("#entradaTexto").addEventListener("input", actualizarTexto);
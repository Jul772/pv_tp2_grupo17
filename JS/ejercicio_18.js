// Función para cambiar el texto
function cambiarTexto(nuevoTexto) {
  const parrafo = document.getElementById("miParrafo");
  parrafo.textContent = nuevoTexto;
}

// botón
const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
  cambiarTexto("¡Texto cambiado correctamente!");
});

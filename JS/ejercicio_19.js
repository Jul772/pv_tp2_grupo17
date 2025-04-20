//función para obtener los valores de los inputs y mostrar un alert
const mostrarDatos = () => {
    //usamos querySelector y así obtener los valores de los inputs
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;

    //validamos que los campos no esten vacíos
    if (nombre.trim() === "" || apellido.trim() === "" || libreta.trim() === "") {
        alert("Por favor, completa todos los campos antes de continuar.");
        return;
    }

    //mensaje de salida
    const mensaje = `
        Los datos ingresados son:
        Nombre: ${nombre}
        Apellido: ${apellido}
        Libreta Universitaria: ${libreta}
    `;

    alert(mensaje.trim());
};

export { mostrarDatos };

//agregamos el evento al botón
document.querySelector("#botonMostrar").addEventListener("click", mostrarDatos);
//array para los números
const numeros = [10, 12, 24, 39, 57, 60, 83, 92];

//funcion flecha que mostrará cada elemento en una linea separada
const mostrarArreglo = (array) => {
    const resultadoDiv = document.getElementById("resultado"); // con el document... podremos seleccionar el elemento div del archivo html

    array.forEach(numero => {
        const elemento = document.createElement("p"); //creamos <p></p> para cada elemento del array
        elemento.textContent = numero; //se agrega el valor del numero actual 
        resultadoDiv.appendChild(elemento); //se inserta el parrafo nuevo al div
    });
}

//llamamos a la funcion y pasamos el array como argumento

mostrarArreglo(numeros);
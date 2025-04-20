//array para los números
const numeros = [10, 12, 24, 39, 57, 60, 83, 92];

//funcion flecha que mostrará cada elemento en una linea separada
const mostrarArreglo = (array) => {
    array.forEach(numero => {
        console.log(numero); // muestra cada num en la consola
    });
}

//llamamos a la funcion y pasamos el array como argumento

mostrarArreglo(numeros);
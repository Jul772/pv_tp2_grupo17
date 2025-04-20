// primero declaramos nuestra array de 6 nombres
const nombres = ["Luna", "Tulipan", "Dalila", "Ahri", "Ana", "Cristian"];

//funcion flecha para que encuentre el nombre más largo
const encontrarNombreMasLargo = (array) => {
    let nombreMasLargo = array[0]; //aquí estamos tomando el primer nombre como referencia inicial

    array.forEach(nombre => {
        if (nombre.length > nombreMasLargo.length){
            nombreMasLargo = nombre; //actualiza con el nombre más largo
        }
    });

    return nombreMasLargo;
};

const nombreMasLargo = encontrarNombreMasLargo(nombres);

// llamamos a la funcion
console.log(`el nombre mas largo es: ${nombreMasLargo}`);
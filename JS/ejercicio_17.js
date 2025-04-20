//funcion para contar la cantidad de veces que aparece la letra a en un string
const contadorLetraA = (texto) => {
    let contador = 0;

    for (let char of texto.toLowerCase()){ //convertimos el texto a minuscula para facilitar el contar
        if (char === "a"){ //comparamos si se trata de "a"
            contador++; // y si es se aumenta al contador
        }
    }
    return contador;
};

//pedimos al usuario que ingrese su texto
const textoIngresado = prompt ("Escriba aquí su texto o palabra:");

//validamos que se haya ingresado un texto
if ( textoIngresado && textoIngresado.trim().length > 0){
    const cantidadDeA = contadorLetraA(textoIngresado);
    alert(`La letra "a" aparece ${cantidadDeA} veces en tu texto.`);
} else {
    alert ("Ingresa un texto válido.");
}
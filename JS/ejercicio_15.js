//array con los nombres de los meses
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

//funcion que determina el mes segun su numero
const retornarMes = (numero) => {
    if (numero >= 1 && numero <= 12) {
        return `el mes correspondiente al número ${numero} es: ${meses[numero-1]}`;
    } else {
        return "el número ingresado no es válido o no corresponde a un mes."
    }
}

//solicitamos al usuario que ingrese un valor
const numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 12:"));

//validamos el número y de caso de no serlo mostramos mensaje
if (!isNaN(numeroIngresado)) { //isNaN "is not a number"
    alert(retornarMes(numeroIngresado));
} else {
    alert("Intente ingresando un número válido.");
}
//solicitamos los kilometros recorridos
const kilometros = parseFloat(prompt("Ingresa aquí los kilometros que has recorrido:"));

//solicitamos los litros de combustibles que consumió
const litros = parseFloat(prompt("Ingresa aquí los litros de combustible que consumió hoy:"));

//validamos los valores que ingresan
if (isNaN(kilometros) || isNaN(litros) || kilometros <= 0 || litros <= 0){
    alert("Por favor, verifique que los valores ingresados sean mayores a 0");
} else {
    //calculamos de tener valores correctos
    const consumo = litros / kilometros;

    alert(`El consumo de combustible es de ${consumo.toFixed(2)} litros por kilometros.`);
}

//parsefloat asegura que los valores que se ingresan sean números decimales
//isNan, verifica si los valores ingresados no son números o menores/iguales a 0
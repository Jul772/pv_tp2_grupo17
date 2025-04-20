//declaramos una función flecha que calcule el area
const calcularAreaCirculo = () => {
    const radio = 7.5;
    const area = Math.PI * Math.pow(radio, 2);
    console.log(`El area del circulo con radio ${radio} es: ${area.toFixed(2)}`);
};

//nota: el area.toFixed(2) redondea el resultado a dos decimales para que sea más legible.
// invocamos
calcularAreaCirculo();
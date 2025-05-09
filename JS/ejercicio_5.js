const calcularSegundos = (horas, minutos) => (horas * 3600) + (minutos * 60);

const horas = 10;
const minutos = 10;
const segundos = calcularSegundos(horas, minutos);

console.log(`La cantidad de segundos en ${horas} horas y ${minutos} minutos es: ${segundos}`);
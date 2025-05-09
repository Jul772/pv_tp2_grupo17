let edades = [12, 16, 20, 14, 17, 19, 23, 30];
let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
}
let promedio = suma / edades.length;

console.log("El promedio de edades es: " + promedio)

function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
        alert(numero1 + " es mayor que " + numero2);
    } else if (numero1 < numero2) {
        alert(numero2 + " es mayor que " + numero1);
    } else {
        alert("Ambos números son iguales.");
    }
}

window.onload = function() {
    calcularMayor(5, 10); 
    calcularMayor(7, 7);   
    calcularMayor(15, 8);  
}
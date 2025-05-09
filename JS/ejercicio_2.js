const primeros10Pares = () => {
    const pares = [];
    let i = 1;
    do {
        while (pares.length < 10) {
            i = i + 1;
            if (i % 2 === 0) {
                pares.push(i);
            }
        };
    } while (pares.length < 10);
    return pares;
}
console.log("Los primeros 10 numeros pares son: ", primeros10Pares());

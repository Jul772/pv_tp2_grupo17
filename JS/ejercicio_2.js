const primeros10Pares = () => {
    const pares = [];
    for (let num = 2; pares.length < 10; num += 2) {
        pares.push(num);
    }
    return pares;
};
console.log("Los primeros 10 numeros pares son: ", primeros10Pares());

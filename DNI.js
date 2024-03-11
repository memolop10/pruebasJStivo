

function letterGeneratorDNI(numeroDNI) {
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
                        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    //Convertir DNI a un entero
    numeroDNI = parseInt(numeroDNI)

    if (numeroDNI > 0 && numeroDNI < 99999999) {
        
        let resto = numeroDNI % 23

        let letter = letters[resto]

        return numeroDNI.toString() + letter
    } else {
        return 'DNI invalido'
    }


}

console.log(letterGeneratorDNI("84569223"))
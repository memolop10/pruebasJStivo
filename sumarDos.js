
const sumarDos = ( numeros, resultado ) => {
    for (let i = 0; i < numeros.length; i++) {
        let primerNumero = numeros[i];
        let segundoNumero = resultado - primerNumero
        // console.log(numeros.includes(segundoNumero))

        if (numeros.includes(segundoNumero) && primerNumero !== segundoNumero) {
            return [primerNumero, segundoNumero]
        }
    }


}

console.log(sumarDos([2,3,5,6,9], 11))

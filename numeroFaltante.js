

function permutacion(numeros) {
    
    numeros.sort( (menor, mayor) => menor - mayor)

    let numerosFaltantes = []

    for (let i = 0; i < numeros.length; i++) {
        let numeroFalta = numeros[i] + 1;
        console.log(numeroFalta , numeros[ i + 1 ])
        if ( numeros[i + 1] !== numeroFalta ) {
            numerosFaltantes.push(numeroFalta)
        }
    }
    numerosFaltantes.pop()

    if (numerosFaltantes.length === 0) {
       return console.log('no falta ningun numero en la sucesion de numeros')
    }
    return numerosFaltantes[numerosFaltantes.length - 1]
}

console.log(permutacion([11, 13, 15 , 12]))
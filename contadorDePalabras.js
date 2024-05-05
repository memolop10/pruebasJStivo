

const contadorPalabras = (phrase) => {
    const palabras = phrase.toLowerCase().replace(/[^\w\s]/gi,"").split(" ");
    console.log(palabras)

    let contador = {}

    palabras.forEach(palabra => {
        if (palabra in contador) {
            contador[palabra]++
        }else{
            contador[palabra] = 1
        }
    })

    console.log(contador)

    return contador
}

console.log(contadorPalabras('El perro esta muy enojado con otro perro'))

const juegoAhorcado = (palabraSecreta) => {
    //crear variable para ocultar la palabra con guiones
    let palabraOculta = '_'.repeat(palabraSecreta.length);

    //variable con el numero de intentos que vamos a tener
    let intentos = 5
    
    //bucle para pedir que se va a ejecutar
    //mientras que no se hayan adivinado todas las letras
    // y mientras aun queden intentos

    while (intentos > 0 && palabraOculta !== palabraSecreta) {
        //pedimos una letra
        let letra = prompt('Adivina la letra')

        //comprobar si la letra esta en la palabra para actualizar
        //la variable palabraOculta

        if (palabraSecreta.includes(letra)) {
            
            //actualizar la variable palabraOculta
            // y meter la letra en la posicion correcta

            for (let contadorLetras = 0; contadorLetras < palabraSecreta.length; contadorLetras++) {
                
                if (letra === palabraSecreta[contadorLetras]) {
                    
                    //convertir la palabraOculta en un array
                    let palabraOcultaArray = Array.from(palabraOculta);

                    //Seleccionar su indice y cambiar _ por la letra adivinada
                    palabraOcultaArray[contadorLetras] = letra;

                    //Unir el array en un string de nuevo
                    //y Actualizar la variable palabraOculta

                    palabraOculta = palabraOcultaArray.join('');
                } 
            } 
                
        }else {
            intentos --;
        }

        //Mostrar  el estado actual de la palabra oculta
        console.log(`La palabra es: ${ palabraOculta }`);
        console.log(`Te quedan ${ intentos } intentos`);
    }

    if (palabraOculta === palabraSecreta) {
        console.log(`!Enhorabuena , has ganado! La palabra Secreta era: ${ palabraSecreta }`)
    } else {
        console.log(`Lo siento, has perdido. La palabra secreta era ${ palabraSecreta }`)
    }
}
    


const lazarJuego = document.querySelector('#startJuego');

lazarJuego.addEventListener("click", () => juegoAhorcado("ahorcado"))
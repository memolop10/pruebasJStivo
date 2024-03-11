

const decimalesAromanos = (numero) => {

    const numeroOriginal = numero;

    let resultado = "";

    const caracteresRomanos = ["M" , "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]

    //recorrer numeros decimales
    for (let i = 0; i < valoresDecimales.length; i++) {
        
        while (numero >= valoresDecimales[i]) {
            //añadir el caracter romano al resultado
            resultado += caracteresRomanos[i]

            numero -= valoresDecimales[i]
        }
    }

    return `El numero ${numeroOriginal} en romano es ${resultado}`
}

console.log(decimalesAromanos(2561))
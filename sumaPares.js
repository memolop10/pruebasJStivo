

function sumaPares(numeros) {
     let suma = 0;

     numeros.forEach(numero => {
        if (numero % 2 === 0) {
            
            suma += numero
        }
     });

     return suma
}

console.log(sumaPares([5,8,9,3,12,10]))
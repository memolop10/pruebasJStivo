
const diferenciaDeDias = (fecha1, fecha2) => {
    
    fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1)
    fecha2= fecha2 instanceof Date ? fecha2 : new Date(fecha2)

    const diferenciaEnMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());
     console.log(diferenciaEnMilisegundos)
    const dias = Math.floor(diferenciaEnMilisegundos / (1000*60*60*24))
        console.log(dias)
    return `La diferencia es de ${dias} dias`
}

console.log(diferenciaDeDias('Dec 1, 2000', 'Dec 24, 2023'))
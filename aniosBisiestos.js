

const bisiestos = (anio) => {

    const limite = 30;

    for (let i = 0; i < limite; i++) {
        
        const fecha = new Date(anio, 1 , 29).getMonth()
        console.log(fecha)
        
        if (fecha === 1) {
            console.log(anio)
        }

        anio++
    }

}

bisiestos(2023)
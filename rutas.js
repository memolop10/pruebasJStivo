
const simplificarRutas = (ruta) => {
    let pila = [];

    const partes = ruta.split('/');
    console.log(partes)
    for (const parte of partes) {
        if (parte === "..") {
            pila.pop()
        } else if( parte !== "." && parte !== "" ){
            pila.push(parte)
        }
        
    }
    console.log(pila)
        
    return `/${pila.join('/')}`
}

console.log(simplificarRutas('/home//doc'))
console.log(simplificarRutas('../.././path'))
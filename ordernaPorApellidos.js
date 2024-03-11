
// const personas = [
//     "Guillermo Lopez",
//     "Carolina Rendon",
//     "Brad Pitt",
//     "Jill Valentine",
//     "Leon Kennedy"
// ]

function ordenaPorApellidos(personas) {
    const apellidos = personas.map( persona => persona.split(" ")[1]);
    
    apellidos.sort()

    const personasOrdenadas = apellidos.map( apellido => {
        const nombreOriginal = personas.find(nombreCompleto => {
            return nombreCompleto.split(" ")[1] === apellido;
        })

        return nombreOriginal
    })

    return personasOrdenadas
}

console.log(ordenaPorApellidos(
    [
        "Guillermo Lopez",
        "Carolina Rendon",
        "Brad Pitt",
        "Jill Valentine",
        "Leon Kennedy"
    ]
))
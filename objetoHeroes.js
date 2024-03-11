
const infoSuperHeroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada','Movilidad aerea'],
        equipo: 'Avengers'
    },
    'Capitan America': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Avengers'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'thunder'],
        equipo: 'Avengers'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Sentido Aracnido'],
        equipo: 'New Avengers'
    }
}

function showInfoSuperHero(alias) {
    
    //Comprobar si existe el heroe
    console.log(`#############${alias}##############`)
    if (alias in infoSuperHeroes) {
        const infoHeroe = infoSuperHeroes[alias]
        console.log(`Nombre Real: ${infoHeroe.nombreReal}`)
        console.log(`Poderes: ${infoHeroe.poderes.join(', ')}`)
        console.log(`Equipo: ${infoHeroe.equipo}`)
    }else{
       console.log(`${alias} no existe en la data`) 
    }

}

showInfoSuperHero('Spider-Man')

const showInfoHeroes = (akas) => {

    akas.forEach(heroe => {
        showInfoSuperHero(heroe)
    });

    // return akas
}

showInfoHeroes(['Thor', 'Iron Man', 'Joker'])

// **********
// * Hola   *
// * soy    *
// * Víctor *
// * Robles *
// * WEB    *
// **********

const mostrarTextoCaja = (phrase) => {
	//Separa frase en palabras
	//y ver cuantos caracteres tiene la palabra mas larga 
	const words = phrase.split(' ');
	let maxSize = 0

	words.forEach(word => {
		maxSize = Math.max(maxSize, word.length)
	});

	const spacesByDefect = 4;

	//imprimir marco superior
	const asterics = maxSize + spacesByDefect
	console.log("*".repeat( asterics ))

	//recorer palabras y mostrarlas dentro de la caja
	words.forEach( word => {
		const spaces = " ".repeat(maxSize - word.length);
		console.log(`* ${ word }${ spaces } *`)
	})

	//imprimir marco inferior
	console.log("*".repeat( asterics ))
}

console.log(mostrarTextoCaja('Hola soy Connor Web DEv'))

const contarPalabras = (phrase) => {

	let wordCounter = 0

	phrase.forEach(element => {
		const wordsElement = element.split(" ")
		const numberWords = wordsElement.length

		wordCounter += numberWords 
	});

	return wordCounter
}

console.log(contarPalabras([
	"Hola, soy Víctor Robles WEB",
	"Me gusta programar",
	"Y soy desarrollador web"
])) 


const ordenarLongitud = (words) => {
	return words.sort((a,b) => a.length - b.length)
}

console.log(ordenarLongitud([
	'Tu',
	'eres',
	'un',
	'dev',
	'habilidoso',
	'y',
	'tienes',
	'experiencia'
])) 
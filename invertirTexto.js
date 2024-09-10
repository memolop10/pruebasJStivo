

const invertirTexto = (word) => {
	// const revertWord = [...word].reduceRight((acc, current) => {
	// 	return acc.concat(current)
	// })

	// return revertWord

	let invertida = ''

	for (let i = word.length - 1; i >= 0; i--) {
		invertida += word[i]
	}

	return invertida

}

console.log(invertirTexto('mariposa'))
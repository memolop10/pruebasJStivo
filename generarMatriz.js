

const matrizGenerate = (size) => {

	let matriz = []

	let numeroActual = 1

	for (let fila = 0; fila < size; fila++) {
		matriz.push([]);

		for (let column = 0; column < size; column++) {
			matriz[fila].push(numeroActual++)
		}
	}

	return matriz
}

console.log(matrizGenerate(2))
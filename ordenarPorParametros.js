const orderObject = (data, property) => {
	return data.sort((a,b) => {
		if ( typeof a[property] === "number") {
			return a[property] - b[property]
		} 

		if ( typeof a[property] === "string") {
			return a[property].localeCompare(b[property])
		}
	})
}

const users = [
	{ name: 'Leon', age: 35 },
	{ name: 'Jill', age: 45 },
	{ name: 'Claire', age: 22 },
	{ name: 'Albert', age: 47 },
]

console.log(orderObject(users, "name"))
const users = [
	{ name: 'Antonio', age: 20 },
	{ name: 'Juan', age: 23 },
	{ name: 'Pepe', age: 12 },
	{ name: 'Raul', age: 28 },
	{ name: 'Paco', age: 38 },
	{ name: 'Jason', age: 56}
];

const filterUsers = (users) => {
	return users.filter( 
		user => user.name.toLowerCase().includes('o') && 
		user.name.toLowerCase().includes('n') && 
		user.age >= 20 )
}

console.log(filterUsers(users))
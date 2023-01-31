// Snack2
//
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


// crea un array vuoto
// const arrayUserNumbers = [];

// // creo somma = 0
// let sumUserNumbers = 0;

// // FINCHE' somma < 50
// while (sumUserNumbers < 50) {
// 	// 		chiedo un numero da inserire nell'array
// 	const userNumber = parseInt(prompt("inserisci un numero"));

// 	// 		aggiungo il numero nell'array
// 	arrayUserNumbers.push(userNumber);

// 	// 		aggiungo il numero alla somma
// 	sumUserNumbers += userNumber;
// }

// console.log(arrayUserNumbers);
// console.log(sumUserNumbers);


// crea un array vuoto
const arrayUserNumbers = [];

// creo somma = 0
let sumUserNumbers = 0;

do {
	// 		chiedo un numero da inserire nell'array

	let userNumber = parseInt(prompt("inserisci un numero"));

	while (isNaN(userNumber)) {
		userNumber = parseInt(prompt("il valore non è valido. inserisci un numero"));
	}

	// 		aggiungo il numero nell'array
	arrayUserNumbers.push(userNumber);

	// 		aggiungo il numero alla somma
} while (sumUserNumbers < 50)
sumUserNumbers += userNumber;

console.log(arrayUserNumbers);
console.log(sumUserNumbers);
// Snack5 (Bonus #2)
//
// Genera un numero a caso compreso tra 1-100.
// Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.
// Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato.
// Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.


const tries = [];
let userNumber;

const secretNumber = Math.floor(Math.random() * 100) + 1;
// console.log(secretNumber);

do {
	userNumber = parseInt(prompt("Chose a number"));

	tries.push(userNumber);

	if (userNumber > secretNumber) {
		alert("Chosen number is greater than secret number");
	} else if (userNumber < secretNumber) {
		alert("Chosen number is lesser than secret number");
	}

} while (userNumber != secretNumber)

alert("Congratulations!\nSecret number was " + secretNumber + ".\nIt took " + tries.length + " tries for you to guess")
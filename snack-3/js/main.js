// Snack3
//
// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// chiedo N
// 
// PER 0 a N volte
// 		creo un array
// 		PER 0 a 10 volte
// 			inserisco un numero casuale da 0 a 100 nell'array
// 		
// 		stampo l'array

// chiedo N
const n = parseInt(prompt("inserisci N"));

// PER 0 a N volte
let i = 0;
while (i < n) {

	// creo un array
	const generatedArray = [];

	// PER 0 a 10 volte
	let y = 0;
	while (y < 10) {
		// genero un numero casuale da 0 a 100
		const randomNumber = Math.floor(Math.random() * 100) + 1;

		// inserisco il numero casuale nell'array
		generatedArray.push(randomNumber);

		// incremento y
		y++;
	}


	// stampo l'array
	console.log(generatedArray);

	// incremento i
	i++;
}

// Snack4 (Bonus)
//
// Fai inserire un numero all'utente.
// Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente).
// Alla fine stampali tutti.

// chiedo numero_1 all'utente
let numero_minore = parseInt(prompt("inserisci un numero"));

// chiedo numero_2 all'utente
let numero_maggiore = parseInt(prompt("inserisci un altro numero"));

const tutti_i_numeri = [
	numero_minore,
	numero_maggiore
];

// FINCHE' numero_2 > numero_1
while (numero_maggiore > numero_minore) {

	numero_minore = numero_maggiore;

	numero_maggiore = parseInt(prompt("inserisci un altro numero"));

	tutti_i_numeri.push(numero_maggiore);

}

console.log(tutti_i_numeri);
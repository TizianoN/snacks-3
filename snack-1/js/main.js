// Snack1
//
// Chiedi all'utente un valore minimo ed un valore massimo.
// Genera un numero casuale all'interno del range fornito dall'utente.

const minimo = parseInt(prompt("inserisci il valore minimo"));
const massimo = parseInt(prompt("inserisci il valore massimo"));

// for (let i = 0; i < 100; i++) {
const randomNumber = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
console.log(randomNumber);
// }

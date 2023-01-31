// Snack5 (Bonus #2)
//
// Genera un numero a caso compreso tra 1-100.
// Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.
// Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato.
// Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.


const buttonEl = document.getElementById("send-number");
const numberEl = document.getElementById("chosen-number");
const listEl = document.getElementById("game-log");
const resultEl = document.getElementById("game-result");
const resetEl = document.getElementById("reset-game");

let tries = [];
let userNumber;

let secretNumber = Math.floor(Math.random() * 100) + 1;
// console.log(secretNumber);

buttonEl.addEventListener(
	"click",
	function () {
		userNumber = parseInt(numberEl.value);

		tries.push(userNumber);

		if (userNumber > secretNumber) {
			listEl.innerHTML += "<li>" + userNumber + " is greater than secret number</li>";
		} else if (userNumber < secretNumber) {
			listEl.innerHTML += "<li>" + userNumber + " is lesser than secret number</li>";
		} else if (userNumber == secretNumber) {
			resultEl.innerHTML = "Congratulations! Secret number was " + secretNumber + ".<br>It took " + tries.length + " tries for you to guess"
		}
	}
)

resetEl.addEventListener(
	"click",
	function () {
		secretNumber = Math.floor(Math.random() * 100) + 1;
		tries = [];
		numberEl.value = "";
		listEl.innerHTML = "";
		resultEl.innerHTML = "";
	}
)


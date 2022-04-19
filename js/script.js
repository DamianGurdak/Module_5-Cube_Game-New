function playGame(playerInput) {
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return "kamień";
		} else if (argMoveId == 2) {
			return "papier";
		} else if (argMoveId == 3) {
			return "nożyce";
		} else {
			printMessage("Nie znam ruchu o id " + argMoveId + ".");
			return "nieznany ruch";
		}
	}

	function displayResult(argComputerMove, argPlayerMove) {
		console.log(
			"moves: ",
			"Ruch komputera: " + argComputerMove,
			"Ruch gracza: " + argPlayerMove
		);

		if (
			(argComputerMove == "kamień" && argPlayerMove == "papier") ||
			(argComputerMove == "papier" && argPlayerMove == "nożyce") ||
			(argComputerMove == "nożyce" && argPlayerMove == "kamień")
		) {
			printMessage("Wygrał gracz!");
		} else if (
			(argPlayerMove == "kamień" && argComputerMove == "papier") ||
			(argPlayerMove == "papier" && argComputerMove == "nożyce") ||
			(argPlayerMove == "nożyce" && argComputerMove == "kamień")
		) {
			printMessage("Wygarł komputer!");
		} else if (
			argPlayerMove == "nieznany ruch" ||
			argComputerMove == "nieznany ruch"
		) {
			printMessage("Nie znany ruch. Powtórz ruch!");
		} else if (argPlayerMove == argComputerMove) {
			printMessage("Mamy ramis, zagraj poowanie!");
		}
	}

	// function printMessage(msg) {
	// 	let div = document.createElement("div");
	// 	div.innerHTML = msg;
	// 	document.getElementById("messages").appendChild(div);
	// }

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	/////////////////////////////////////////////////////
	console.log("Wylosowana liczba to: " + randomNumber);
	/////////////////////////////////////////////////////

	// let computerMove = "nieznany ruch"; zmieniam ponizej deklarcje funkcji
	let computerMove = getMoveName(randomNumber);

	// if (randomNumber == 1) {
	// 	computerMove = "kamień";
	// } else if (randomNumber == 2) {
	// 	computerMove = "papier";
	// } else if (randomNumber == 3) {
	// 	computerMove = "nożyce";
	// }

	printMessage("Komputer: Mój ruch to: " + computerMove);

	// let playerInput = prompt(
	// 	"Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
	// );

	/////////////////////////////////////////////////////
	console.log("Gracz wpisał: " + playerInput);
	/////////////////////////////////////////////////////

	// let playerMove = "nieznany ruch"; zmeniam ponizej deklaracje zmiennej
	let playerMove = getMoveName(playerInput);

	// if (playerInput == "1") {
	// 	playerMove = "kamień";
	// } else if (playerInput == "2") {
	// 	playerMove = "papier";
	// } else if (playerInput == "3") {
	// 	playerMove = "nożyce";
	// }

	printMessage("Gracz: Twój ruch to: " + playerMove);

	displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
	//printMessage("Wybrałeś pkamień"); nie jest zdefiniowa jak to zronic zeby wyswietlic
	playGame("1");
});
document.getElementById("play-paper").addEventListener("click", function () {
	//printMessage("Wybrałeś papier");
	playGame("2");
});
document.getElementById("play-scissors").addEventListener("click", function () {
	//printMessage("Wybrałeś nożyce");
	playGame("3");
});

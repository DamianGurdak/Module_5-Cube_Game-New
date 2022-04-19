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

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	/////////////////////////////////////////////////////
	console.log("Wylosowana liczba to: " + randomNumber);
	/////////////////////////////////////////////////////

	const computerMove = getMoveName(randomNumber);

	printMessage("Komputer: Mój ruch to: " + computerMove);

	/////////////////////////////////////////////////////
	console.log("Gracz wpisał: " + playerInput);
	/////////////////////////////////////////////////////

	const playerMove = getMoveName(playerInput);

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

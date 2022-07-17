const Player = (name, symbol) => {
	let score = 0;
	const getName = () => name;

	const getSymbol = () => symbol;

	const getScore = () => score;

	const updateScore = () => {
		score += 1;
	};

	return {
		getName,
		getSymbol,
		getScore,
		updateScore,
	};
};

const gameBoard = (() => {
	let gameType;
	let player1;
	let player2;

	const setGameType = (type) => {
		gameType = type;
	};
	return { player1, player2, setGameType };
})();

const displayController = (() => {
	const startScreen = document.querySelector(".start");
	const playScreen = document.querySelector(".play");
	const endScreen = document.querySelector(".end");
	const start = document.querySelector("#start-button");
	const gameChoice = document.querySelectorAll(".game-choice");
	const playerNames = document.querySelectorAll(".player-names");

	const resetStart = () => {
		gameChoice[0].classList.add("clicked");
		gameChoice[1].classList.remove("clicked");
		for (let i = 0; i < playerNames.length; i++) {
			playerNames[i].value = "";
		}
	};

	const swapScreen = (oldScreen, newScreen) => {
		oldScreen.classList.add("hidden");
		newScreen.classList.remove("hidden");
	};

	const startGame = () => {
		if (gameChoice[0].classList.contains("clicked")) {
			gameBoard.setGameType = "computer";
			gameBoard.player1 = Player(playerNames[0].value, "X");
			gameBoard.player2 = Player("Computer", "O");
		} else {
			gameBoard.setGameType = "players";
			gameBoard.player1 = Player(playerNames[1].value, "X");
			gameBoard.player2 = Player(playerNames[2].value, "O");
		}
		resetStart();
		swapScreen(startScreen, playScreen);
	};

	gameChoice.forEach((section) => {
		section.addEventListener("click", () => {
			gameChoice[0].classList.remove("clicked");
			gameChoice[1].classList.remove("clicked");
			section.classList.add("clicked");
		});
	});

	start.addEventListener("click", startGame);
})();

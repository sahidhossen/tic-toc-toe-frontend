export const players = {
	1: "Player X",
	2: "Player O",
};

const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2],
];

export const checkWin = (board, player) => {
	let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every((elem) => plays.indexOf(elem) > -1)) {
			gameWon = player;
			break;
		}
	}
	return gameWon;
};

export const isMatchTie = (board) => {
	if (checkEmptyPlace(board).length === 0) {
		return true;
	}
	return false;
};

const checkEmptyPlace = (board) => {
	return board.filter((s) => s === 0);
};

export const processNextTick = (game, index) => {
	const { ticks, players, player_state } = game;

	const nextTicks = [...ticks];
	nextTicks[index] = player_state;

	const winner = checkWin(nextTicks, player_state);

	let tie = false,
		nextPlayer = player_state,
		log = "";

	if (winner) {
		log = "Game Over";
	} else {
		tie = isMatchTie(nextTicks);
		nextPlayer = nextPlayer === "x" ? "o" : "x";
		log = tie ? "Game Over" : players[nextPlayer].name + " Turn";
	}

	return { ticks: nextTicks, player_state: nextPlayer, winner, tie, log };
};

export * from "./API";

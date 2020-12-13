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

export * from "./API";

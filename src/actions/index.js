import { checkWin, isMatchTie, API } from "../utils";

export const updateTicks = (options) => {
	const { ticks, players, player_state } = options;
	const winner = checkWin(ticks, player_state);
	let tie = false,
		nextPlayer = player_state,
		log = "";
	if (winner) {
		log = players[nextPlayer].name + " Win";
	} else {
		tie = isMatchTie(ticks);
		nextPlayer = nextPlayer === "x" ? "o" : "x";
		log = tie ? "Match Tie" : players[nextPlayer].name + " Turn";
	}
	const payload = { ticks, player_state: nextPlayer, winner, tie, log };
	updateGame(payload);
	return { type: "UPDATE_TICKS", payload };
};

const updateGame = (options) => {
	const response = API({ url: "/game/update", method: "POST", data: options }).then((res) => res);
	response.then((re) => console.log("re: ", re));
};

// Reset Game

export const resetGame = async (dispatch) => {
	const response = await API({ url: "/game/reset" }).then((res) => res);
	if (response.success) {
		dispatch({ type: "INIT_GAME", payload: response.game });
	}
};

// Fetch game state
export const getGame = async (dispatch) => {
	const response = await API({ url: "/game" }).then((res) => res);
	if (response.success) {
		dispatch({ type: "INIT_GAME", payload: response.game });
	}
};

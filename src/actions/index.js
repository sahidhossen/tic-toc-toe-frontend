import { API } from "../utils";

export const updateTicks = (payload) => {
	updateGame(payload);
	return { type: "UPDATE_TICKS", payload };
};

const updateGame = (options) => {
	API({ url: "/game/update", method: "POST", data: options }).then((res) => res);
};

// Reset Game
export const resetGame = async (dispatch) => {
	const response = await API({ url: "/game/reset" }).then((res) => res);
	if (response.success) {
		dispatch({ type: "INIT_GAME", payload: { ...response.game, tie: false } });
	}
};

// Fetch game state
export const getGame = async (dispatch) => {
	const response = await API({ url: "/game" }).then((res) => res);
	if (response.success) {
		dispatch({ type: "INIT_GAME", payload: response.game });
	}
};

const defaultTicks = Array.from(Array(9).fill(0));

const initialState = {
	player: 1,
	player_state: "x",
	players: {
		x: { name: "X", win: 0 },
		o: { name: "O", win: 0 },
	},
	ticks: [...defaultTicks],
	winner: null,
	tie: false,
	logs: ["Start Game"],
	fetch: false,
};

const GameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_TICKS": {
			const {
				payload: { ticks, winner, tie, log, player_state },
			} = action;

			const nextLog = [log, ...state.logs];
			if (winner) {
				const players = state.players[winner];
				state.players[winner] = { ...players, wins: players.wins + 1 };
			}
			return {
				...state,
				player_state,
				ticks: [...ticks],
				winner,
				tie,
				log: nextLog,
			};
		}
		case "INIT_GAME": {
			const { payload } = action;
			return {
				...state,
				...payload,
				fetch: true,
			};
		}
		default:
			return state;
	}
};

export default GameReducer;

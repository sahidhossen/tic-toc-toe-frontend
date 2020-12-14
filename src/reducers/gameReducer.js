import { isMatchTie, checkWin } from "../utils";

const defaultTicks = Array.from(Array(9).fill(0));

export const initialState = {
	player_state: "x",
	players: {
		x: { name: "X", win: 0 },
		o: { name: "O", win: 0 },
	},
	ticks: [...defaultTicks],
	winner: null,
	tie: false,
	logs: [],
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
				logs: nextLog,
			};
		}
		case "INIT_GAME": {
			const { payload } = action;
			const winner = checkWin(payload.ticks, payload.player_state);

			let tie = false;
			if (!winner) {
				tie = isMatchTie(payload.ticks);
			}
			return {
				...state,
				...payload,
				winner,
				tie,
				fetch: true,
			};
		}
		default:
			return state;
	}
};

export default GameReducer;

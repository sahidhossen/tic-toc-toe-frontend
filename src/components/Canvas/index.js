import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTicks, resetGame } from "../../actions";
import { GameCanvas, Flex, ResetBtn } from "../../styled";
import { Grid, Cross, Oval } from "../Icons";

const Canvas = () => {
	const { ticks, players, tie, player_state, winner } = useSelector((state) => state.game);

	const dispatch = useDispatch();

	const onClicHandler = (index) => () => {
		if (!ticks[index] && !winner) {
			const nextTicks = [...ticks];
			nextTicks[index] = player_state;
			dispatch(updateTicks({ ticks: nextTicks, players, player_state }));
		}
	};

	const onResetGame = (event) => {
		event.preventDefault();
		dispatch(resetGame);
	};

	return (
		<GameCanvas>
			<Grid />
			<Flex className="board">
				{ticks.map((stage, index) => {
					const player1 = ticks[index] === "x";
					const player2 = ticks[index] === "o";
					return (
						<Flex className="slot" key={index} onClick={onClicHandler(index)}>
							{player1 && <Cross />}
							{player2 && <Oval />}
						</Flex>
					);
				})}
			</Flex>
			{(winner || tie) && <ResetBtn onClick={onResetGame}>Reset</ResetBtn>}
		</GameCanvas>
	);
};

export default Canvas;

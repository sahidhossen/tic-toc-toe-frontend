import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTicks, resetGame } from "../../actions";
import { GameCanvas, Flex } from "../../styled";
import { Grid } from "../Icons";
import Slot from "./Slot";
import ResultPopover from "./ResultPopover";
import { processNextTick } from "../../utils";

const Canvas = () => {
	const game = useSelector((state) => state.game);
	const { ticks, tie, winner, players } = game;

	const dispatch = useDispatch();

	const onClicHandler = (index) => {
		if (!ticks[index] && !winner) {
			dispatch(updateTicks(processNextTick(game, index)));
		}
	};

	const onResetGame = (event) => {
		event.preventDefault();
		dispatch(resetGame);
	};

	return (
		<GameCanvas>
			<Grid data-test="gridBackground" />
			<Flex className="board">
				{ticks.map((stage, index) => {
					return <Slot key={index} player={ticks[index]} index={index} onSelect={onClicHandler} />;
				})}
			</Flex>
			{(winner || tie) && (
				<ResultPopover players={players} winner={winner} onReset={onResetGame}>
					Reset
				</ResultPopover>
			)}
		</GameCanvas>
	);
};

export default Canvas;
